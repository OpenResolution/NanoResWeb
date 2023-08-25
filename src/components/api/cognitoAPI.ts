import { AmplifyUser } from "@aws-amplify/ui/dist/types/types/authenticator";
import AWS from "aws-sdk";
import { aws as awsConfig } from "@/aws-config";

interface UserInfo {
  amplifyUser: AmplifyUser;
  cognitoId: string;
  identityId: string;
  cognitoIdentityCredentials: AWS.CognitoIdentity.Credentials;
  awsCredentials: AWS.Credentials;
  jwtToken: string;
  signOut: () => void;
}

function generateJWTAuthorizationHeader(userInfo: UserInfo) {
  const jwtToken = userInfo.amplifyUser
    ?.getSignInUserSession()
    ?.getIdToken()
    .getJwtToken();
  const headers = {
    Authorization: `${jwtToken}`,
  };
  return headers;
}

async function fetchUserInfoWithAmplifyUser(
  user: AmplifyUser | undefined,
  signOut: () => void
) {
  const jwtToken = getJWTTokenFromAmplifyUser(user);
  const loginsKey = awsConfig.cognitoUserPoolIssuerURL;
  const cognitoIdentity = new AWS.CognitoIdentity();
  const { IdentityId } = await cognitoIdentity
    .getId({
      IdentityPoolId: awsConfig.cognitoIdentityPoolId,
      Logins: {
        [loginsKey]: jwtToken,
      },
    })
    .promise();
  const { Credentials } = await cognitoIdentity
    .getCredentialsForIdentity({
      IdentityId: IdentityId as string,
      Logins: {
        [loginsKey]: jwtToken,
      },
    })
    .promise();
  const awsCredentials = cognitoIdentityCredentialsToAWSCredentials(
    Credentials as AWS.CognitoIdentity.Credentials
  );
  AWS.config.update({
    credentials: awsCredentials,
  });

  return {
    amplifyUser: user,
    cognitoId: user?.username as string,
    identityId: IdentityId,
    cognitoIdentityCredentials: Credentials,
    awsCredentials,
    jwtToken,
    signOut,
  } as UserInfo;
}

function cognitoIdentityCredentialsToAWSCredentials(
  credentials: AWS.CognitoIdentity.Credentials
): AWS.Credentials {
  return new AWS.Credentials({
    accessKeyId: credentials.AccessKeyId as string,
    secretAccessKey: credentials.SecretKey as string,
    sessionToken: credentials.SessionToken as string,
  });
}

function getJWTTokenFromAmplifyUser(user: AmplifyUser | undefined): string {
  let jwtToken = user?.getSignInUserSession()?.getIdToken().getJwtToken();
  if (jwtToken === undefined) {
    jwtToken = "";
  }
  return jwtToken;
}

export { fetchUserInfoWithAmplifyUser, generateJWTAuthorizationHeader };
export type { UserInfo };
