import axios from "axios";
import { aws as awsConfig } from "@/aws-config";
import { UserInfo } from "./cognitoAPI";
import { generateJWTAuthorizationHeader } from "./cognitoAPI";

const getTasksAPIGatewayEndPoint = awsConfig.apiListTasksURL;
const createTaskAPIGatewayEndPoint = awsConfig.apiCreateTaskURL;
const scheduleTaskAPIGatewayEndPoint = awsConfig.apiScheduleTaskURL;

type TaskStatus = "not_verified" | "verified" | "submitted" | "running" | "finished_successful" | "finished_failed"

interface Task {
  id: number;
  name: string;
  create_time: string;
  update_time: string;
  input_s3_key: string;
  output_s3_key: string;
  user_id: string;
  config_id: string;
  status: TaskStatus;
}

// Create params typings

interface CreateTaskRequestParams {
  userInfo: UserInfo;
  name: string;
  input_s3_key: string;
  config_id: number;
}

// Response data typings

interface TaskListResponse {
  tasks: Task[];
}

type TaskCreateResponse = Task;

async function scheduleTaskOnSQSByTaskId(userInfo: UserInfo, task_id: number) {
  debugger;
  const response = await axios({
    method: "post",
    url: scheduleTaskAPIGatewayEndPoint,
    data: {
      task_id,
    },
    headers: generateJWTAuthorizationHeader(userInfo),
  });
}

async function fetchTaskWithUserInfo(userInfo: UserInfo) {
  const response = await axios({
    method: "post",
    url: getTasksAPIGatewayEndPoint,
    headers: generateJWTAuthorizationHeader(userInfo),
  });

  return response.data as TaskListResponse;
}

async function createTaskByUserId(params: CreateTaskRequestParams) {
  const response = await axios({
    method: "post",
    url: createTaskAPIGatewayEndPoint,
    data: {
      user_id: params.userInfo.cognitoId,
      name: params.name,
      input_s3_key: params.input_s3_key,
      config_id: params.config_id,
    },
    headers: generateJWTAuthorizationHeader(params.userInfo),
  });

  return response.data as TaskCreateResponse;
}

export { fetchTaskWithUserInfo, createTaskByUserId, scheduleTaskOnSQSByTaskId };
export type { Task, TaskListResponse, TaskCreateResponse, CreateTaskRequestParams };
