import AWS from "aws-sdk";
import { filesize } from "filesize";
import { UserInfo } from "./cognitoAPI";

const AWS_SMLM_BUCKET = "smlm-input-bucket";
const AWS_SMLM_BUCKET_FILE_PREFIX = "smlmUserFiles";
const S3_BUCKET_PATH_PREFIX = "s3://smlm-output-bucket";
const S3_PRESIGNED_URL_STALETIME = 60 * 60;

interface File {
  name: string;
  size: string;
  byteSize: number;
  s3Key: string;
}

async function generatePreSignedURL(s3Key: string) {
  const s3 = new AWS.S3();
  return await s3.getSignedUrlPromise("getObject", {
    Bucket: AWS_SMLM_BUCKET,
    Expires: S3_PRESIGNED_URL_STALETIME,
    Key: s3Key,
  });
}

async function fetchFilesListWithUserInfo(userInfo: UserInfo) {
  const s3 = new AWS.S3();
  AWS.config.update({
    credentials: userInfo.awsCredentials,
  });
  const privateDirKey = `${AWS_SMLM_BUCKET_FILE_PREFIX}/${userInfo.identityId}`;
  const { Contents } = await s3
    .listObjectsV2({
      Bucket: AWS_SMLM_BUCKET,
      Prefix: privateDirKey,
    })
    .promise();
  if (!!Contents) {
    return Contents.map((object) => awss3ObjectToFile(userInfo, object)).filter(
      (f) => f.name !== ""
    );
  } else {
    return [];
  }
}

function s3AddressToUserFileName(s3Address: string) {
  return s3Address.split(/(\\|\/)/g).pop()
}

function awss3ObjectToFile(userInfo: UserInfo, object: AWS.S3.Object): File {
  const path = object.Key;
  const prefix = `${AWS_SMLM_BUCKET_FILE_PREFIX}/${userInfo.identityId}/`;
  const prefixLen = prefix.length;
  const byteSize = object.Size ? object.Size : 0;
  return {
    name: path ? path.slice(prefixLen) : "ERROR",
    byteSize: byteSize,
    size: filesize(byteSize, { base: 2, standard: "jedec" }) as string,
    s3Key: object.Key ? object.Key : "",
  };
}

function getFileNameWithS3Key(files: File[] | undefined, s3Key : string) : string {
  if (files !== undefined) {
    for(const file of files) {
      if (file.s3Key === s3Key) {
        return file.name;
      }
    }
  }
  return "";
}

export {
  fetchFilesListWithUserInfo,
  awss3ObjectToFile,
  generatePreSignedURL,
  s3AddressToUserFileName,
  getFileNameWithS3Key,
};
export type { File };
