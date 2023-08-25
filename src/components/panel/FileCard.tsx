import { File } from "@/components/api/fileAPI";
import { usePreSignedURLQuery } from "../api/queries";

interface FileCardProps {
  file: File;
}

function FileCard({ file }: FileCardProps) {
  const preSignedUrlQuery = usePreSignedURLQuery(file.s3Key);

  return (
    <a href={preSignedUrlQuery.data}>
      <div className="grid grid-rows-2 w-full h-20 bg-gray-50 p-2 rounded-md justify-center">
        <div className="text-black text-ellipsis truncate self-start">
          {file.name}
        </div>
        <div className="text-gray-400 self-end justify-self-center">
          {file.size}
        </div>
      </div>
    </a>
  );
}

export default FileCard;
