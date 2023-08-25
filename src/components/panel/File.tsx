import FileCard from "./FileCard";
import { useUserInfoQuery, useListFilesQuery } from "../api/queries";

function File() {
  const userInfoQuery = useUserInfoQuery();
  const listFilesQuery = useListFilesQuery(userInfoQuery.data);
  return (
    <div className="h-screen">
      <div className="grid grid-cols-5 gap-4 p-4">
        {listFilesQuery.data?.map((file, id) => (
          <FileCard key={id} file={file} />
        ))}
      </div>
    </div>
  );
}

export default File;
