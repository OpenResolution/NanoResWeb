import { useQuery } from "@tanstack/react-query";
import { fetchUserInfoWithAmplifyUser } from "./cognitoAPI";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { UserInfo } from "./cognitoAPI";
import { fetchFilesListWithUserInfo } from "./fileAPI";
import { generatePreSignedURL } from "./fileAPI";
import { fetchTaskWithUserInfo } from "./taskAPI";
import { fetchConfigSchema } from "./configSchemaAPI";

const useUserInfoQuery = () => {
  const { user, signOut } = useAuthenticator((context) => [context.user]);
  return useQuery({
    queryKey: ["userInfo"],
    queryFn: async () => fetchUserInfoWithAmplifyUser(user, signOut),
    staleTime: Infinity,
  });
};

const useListFilesQuery = (userInfo: UserInfo | undefined) =>
  useQuery({
    queryKey: ["files"],
    queryFn: async () => fetchFilesListWithUserInfo(userInfo as UserInfo),
    enabled: userInfo !== undefined,
    staleTime: Infinity,
  });

const usePreSignedURLQuery = (s3Key: string) =>
  useQuery({
    queryKey: [`preSignedURL#${s3Key}`],
    queryFn: async () => generatePreSignedURL(s3Key),
    // TODO: staleTime should not be Infinity.
    // Will do after moving all consts into config
    staleTime: Infinity,
  });

const useListTasksQuery = (userInfo: UserInfo | undefined) =>
  useQuery({
    queryKey: ["tasks"],
    queryFn: async () => fetchTaskWithUserInfo(userInfo as UserInfo),
    staleTime: Infinity,
    enabled: userInfo !== undefined,
  });

const useConfigSchemaQuery = (userInfo: UserInfo | undefined) => useQuery({
  queryKey: ["configSchema"],
  queryFn: async () => fetchConfigSchema(userInfo as UserInfo, "2d", "0.0.1"),
  staleTime: Infinity,
  enabled: userInfo !== undefined,
})

export {
  useUserInfoQuery,
  useListFilesQuery,
  usePreSignedURLQuery,
  useListTasksQuery,
  useConfigSchemaQuery,
};
