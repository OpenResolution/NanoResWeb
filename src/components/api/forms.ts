import { useForm } from "react-hook-form";
import { UserInfo } from "./cognitoAPI";
import { CreateTaskRequestParams } from "./taskAPI";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

interface SMLMTaskForm {
  type: string;
  taskName: string;
  file: string;
}

const smlmTaskSchema : yup.ObjectSchema<SMLMTaskForm> = yup.object({
  type: yup.string<"2D" | "3D">().required(),
  taskName: yup
    .string()
    .required("Your must enter a task name.")
    .max(50, "Task name cannot exceed 50 characters."),
  file: yup.string().required(),
});

function useSMLMTaskForm() {
  return useForm<SMLMTaskForm>({
    resolver: yupResolver(smlmTaskSchema)
  })
}

function SMLMTaskFormToCreateTaskRequestParams(
  form: SMLMTaskForm,
  userInfo: UserInfo | undefined
): CreateTaskRequestParams {
  return {
    userInfo: userInfo as UserInfo,
    name: form.taskName,
    input_s3_key: form.file,
    config_id: 1,
  };
}

export { SMLMTaskFormToCreateTaskRequestParams, useSMLMTaskForm };
export type { SMLMTaskForm };
