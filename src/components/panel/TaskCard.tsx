import { Task, scheduleTaskOnSQSByTaskId } from "../api/taskAPI";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { s3AddressToUserFileName } from "../api/fileAPI";
import { usePreSignedURLQuery, useUserInfoQuery } from "../api/queries";
import { UserInfo } from "../api/cognitoAPI";
import { Button } from "@mui/material";

interface TaskCardProps {
  taskInfo: Task;
}

const S3_BUCKET_PATH_PREFIX = "s3://smlm-output-bucket";

function TaskCard({ taskInfo }: TaskCardProps) {
  const queryClient = useQueryClient();
  const userInfoQuery = useUserInfoQuery();
  const taskOutputFileS3Key = taskInfo.output_s3_key.slice(
    S3_BUCKET_PATH_PREFIX.length
  );
  const taskOutputFilePreSignedUrlQuery =
    usePreSignedURLQuery(taskOutputFileS3Key);

  const scheduleTaskMutate = useMutation({
    mutationFn: async () => {
      scheduleTaskOnSQSByTaskId(
        userInfoQuery.data as UserInfo,
        taskInfo.id
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  const handleScheduleButtonClick = () => {
    scheduleTaskMutate.mutate();
  };

  const inputFileName = s3AddressToUserFileName(taskInfo.input_s3_key);

  const button = () => {
    const buttonClassName =
      "text-gray-700 bg-gray-100 px-[1em] py-[0.25em] rounded-lg";
    switch (taskInfo.status) {
      case "verified":
        return (
          <button
            className={buttonClassName}
            onClick={handleScheduleButtonClick}
          >
            Schedule
          </button>
        );
      case "finished_successful":
        return (
          <a
            className={buttonClassName}
            href={taskOutputFilePreSignedUrlQuery.data}
          >
            Download
          </a>
        );
    }
  };

  const tag = () => {
    switch (taskInfo.status) {
      case "not_verified":
        return "Not verified";
      case "verified":
        return "Verified";
      case "submitted":
        return "Submitted";
      case "running":
        return "Running";
      case "finished_successful":
        return "Finished";
      case "finished_failed":
        return "Failed";
    }
  };

  return (
    <div className="bg-gray-200 rounded-xl p-4">
      <div className="grid grid-cols-2 items-center mb-2">
        <div className="text-black text-lg whitespace-nowrap truncate">
          {taskInfo.name}
        </div>
        <div className="justify-self-end">
          {tag()}
        </div>
      </div>
      <div className="text-gray-600 whitespace-nowrap truncate">
        <span className="text-gray-400">Input:</span> {inputFileName}
      </div>
      <div className="flex justify-around mt-4">{button()}</div>
    </div>
  );
}

export default TaskCard;
