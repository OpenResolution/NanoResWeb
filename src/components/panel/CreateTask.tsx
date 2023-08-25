import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useListFilesQuery, useUserInfoQuery } from "../api/queries";
import { useCreateTaskMutation } from "../api/mutations";
import {
  SMLMTaskForm,
  SMLMTaskFormToCreateTaskRequestParams,
  useSMLMTaskForm,
} from "../api/forms";
import { getFileNameWithS3Key } from "../api/fileAPI";
import {
  SMLMForm,
  SMLMFormInput,
  SMLMFormControlledListBox,
  SMLMFormControlledComboBox,
} from "./Form";

interface CreateTaskModalProps {
  closeModal: () => void;
}

function CreateTaskModal({ closeModal }: CreateTaskModalProps) {
  const userInfoQuery = useUserInfoQuery();
  const listFilesQuery = useListFilesQuery(userInfoQuery.data);
  const queryClient = useQueryClient();
  const createTaskMutation = useCreateTaskMutation(queryClient);
  const { register, handleSubmit, control } = useSMLMTaskForm();
  const [fileNameInput, setFileNameInput] = useState<string>("");

  const fileNameSuggestions = listFilesQuery.isSuccess
    ? listFilesQuery.data.filter((file) => file.name.startsWith(fileNameInput))
    : undefined;

  const getFileName = (s3key: string) =>
    getFileNameWithS3Key(listFilesQuery.data, s3key);

  const onValidFormSubmit = (form: SMLMTaskForm) => {
    createTaskMutation.mutate(SMLMTaskFormToCreateTaskRequestParams(form, userInfoQuery.data));
    closeModal();
  };

  const onInvalidFormSubmit = (error : any) => {
    //TODO: fuxuanyi Add error 
  };

  return (
    <SMLMForm onSubmit={handleSubmit(onValidFormSubmit, onInvalidFormSubmit)}>
      <SMLMFormInput name="Name" register={() => register("taskName")} />
      {fileNameSuggestions && <SMLMFormControlledComboBox
        name="file"
        control={control}
        options={
          fileNameSuggestions && fileNameSuggestions.map((file) => file.s3Key)
        }
        inputDisplayValue={getFileName}
        defaultValue={fileNameSuggestions && fileNameSuggestions[0].s3Key}
        inputOnChange={(event) => setFileNameInput(event.target.value)}
        optionDisplayValue={getFileName}
      />}
      <SMLMFormControlledListBox
        control={control}
        options={["2D", "3D"]}
        defaultValue="2D"
        name="type"
      />
    </SMLMForm>
  );
}

export default CreateTaskModal;
export type { CreateTaskModalProps };
