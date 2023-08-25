import axios from "axios";
import { aws as awsConfig } from "@/aws-config";
import { UserInfo } from "./cognitoAPI";
import { generateJWTAuthorizationHeader } from "./cognitoAPI";
import { RJSFSchema } from '@rjsf/utils';

const getConfigSchemaEndPoint = awsConfig.apiGetConfigSchemaURL;

async function fetchConfigSchema(userInfo: UserInfo, type : string, version: string) {
  const response = await axios({
    method: "post",
    url: getConfigSchemaEndPoint,
    data: {
      type: type,
      version: version,
    },
    headers: generateJWTAuthorizationHeader(userInfo),
  });

  return response.data as RJSFSchema;
}

export { fetchConfigSchema };