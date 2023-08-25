const aws = {
  region: "us-east-2",
  cognitoIdentityPoolId: "us-east-2:e3ae7ea0-5f88-4a98-a637-b5f527fbfd46",
  cognitoRegion: "us-east-2",
  cognitoUserPoolWebClientId: "3lr7n2p73vkd27nqaqhnf41ai8",
  cognitoUserPoolId: "us-east-2_NjsP3UWBm",
  cognitoUserPoolIssuerURL:
    "cognito-idp.us-east-2.amazonaws.com/us-east-2_NjsP3UWBm",
  apiGatewayInvokeURL: "https://b5yzppn05m.execute-api.us-east-2.amazonaws.com",
  apiListTasksURL:
    "https://6cqf5xmgah.execute-api.us-east-2.amazonaws.com/dev/task/list",
  apiCreateTaskURL:
    "https://6cqf5xmgah.execute-api.us-east-2.amazonaws.com/dev/task",
  apiScheduleTaskURL:
    "https://6cqf5xmgah.execute-api.us-east-2.amazonaws.com/dev/task/schedule",
  apiGetConfigSchemaURL:
    "https://b5yzppn05m.execute-api.us-east-2.amazonaws.com/getConfigSchema"
};

const amplify = {
  aws_project_region: "us-east-2",
  aws_cognito_identity_pool_id:
    "us-east-2:e3ae7ea0-5f88-4a98-a637-b5f527fbfd46",
  aws_cognito_region: "us-east-2",
  aws_user_pools_id: "us-east-2_NjsP3UWBm",
  aws_user_pools_web_client_id: "3lr7n2p73vkd27nqaqhnf41ai8",
  oauth: {},
  aws_cognito_username_attributes: ["EMAIL"],
  aws_cognito_social_providers: [],
  aws_cognito_signup_attributes: ["EMAIL"],
  aws_cognito_mfa_configuration: "OFF",
  aws_cognito_mfa_types: ["SMS"],
  aws_cognito_password_protection_settings: {
    passwordPolicyMinLength: 8,
    passwordPolicyCharacters: [],
  },
  aws_cognito_verification_mechanisms: ["EMAIL"],
  aws_dynamodb_all_tables_region: "us-east-2",
  aws_dynamodb_table_schemas: [
    {
      tableName: "testtable-dev",
      region: "us-east-2",
    },
  ],
};

export { aws, amplify };
