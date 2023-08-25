import { RJSFSchema } from "@rjsf/utils";
import { Theme as MUITheme } from "@rjsf/mui";
import { withTheme } from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";
import { useUserInfoQuery, useConfigSchemaQuery } from "../api/queries";

const Form = withTheme(MUITheme);

function ConfigForm() {
  const userInfoQuery = useUserInfoQuery();
  const configSchemaQuery = useConfigSchemaQuery(userInfoQuery.data);

  if (configSchemaQuery.data) {
    return <Form validator={validator} schema={configSchemaQuery.data} />;
  }

  return <></>;
}

export default ConfigForm;
