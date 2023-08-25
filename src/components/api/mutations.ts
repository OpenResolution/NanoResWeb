import { useMutation, QueryClient } from "@tanstack/react-query";
import { CreateTaskRequestParams, TaskListResponse } from "./taskAPI";
import { createTaskByUserId } from "./taskAPI";
import { Task } from "./taskAPI";

function useCreateTaskMutation(queryClient : QueryClient) {
  return useMutation({
    mutationFn: async (params: CreateTaskRequestParams) => {
      return await createTaskByUserId(params);
    },
    onSuccess: (createdTask : Task) => {
      console.log("CreateTaskMutation Success, Xuanyi FU")
      queryClient.setQueryData<TaskListResponse>(["tasks"], (oldTaskListResponse) => {
        if(oldTaskListResponse == undefined) {
          return {
            tasks: [createdTask]
          };
        }
        return {
          tasks: [createdTask, ...oldTaskListResponse.tasks]
        };
      });
    },
  });
}

export { useCreateTaskMutation };