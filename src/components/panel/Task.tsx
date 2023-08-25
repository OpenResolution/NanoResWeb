import { useState } from "react";
import CreateTaskModal from "@/components/panel/CreateTask";
import TaskCard from "@/components/panel/TaskCard";
import { useUserInfoQuery, useListTasksQuery } from "../api/queries";
import { Dialog, DialogContent, DialogTitle } from "@mui/material"
import { Task } from "../api/taskAPI";

function Task(): JSX.Element {
  const [createTaskModalOpen, setCreateTaskModalOpen] = useState(false);

  const userInfoQuery = useUserInfoQuery();
  const taskQuery = useListTasksQuery(userInfoQuery.data);

  const handleCreateTaskModalCancel = () => {
    setCreateTaskModalOpen(false);
  };

  const handleCreateTaskButtonClick = () => {
    setCreateTaskModalOpen(true);
  };

  const sortedTaskQueryData = () => {
    if (taskQuery.isSuccess) {
      const sortedList = [...taskQuery.data.tasks];
      sortedList.sort((lhs, rhs) => {
        return rhs.create_time.localeCompare(lhs.create_time);
      });
      return sortedList;
    }

    return [];
  };

  const handleCreateTaskModalClose = () => {
    handleCreateTaskModalCancel();
  };

  return (
    <>
      <Dialog
        className="relative z-50"
        open={createTaskModalOpen}
        onClose={handleCreateTaskModalClose}
      >
        <DialogTitle>
          New Task
        </DialogTitle>
        <DialogContent dividers>
          <CreateTaskModal closeModal={handleCreateTaskModalClose} />
        </DialogContent>
      </Dialog>
      <div className="w-full min-h-screen">
        <div className="flex justify-start items-center p-4 border-b-2 border-b-gray-400">
          <div
            className="px-[0.5em] py-[0.25em] bg-gray-100 hover:bg-gray-400 text-black rounded-md"
            onClick={handleCreateTaskButtonClick}
          >
            + New Task
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 m-4">
          {sortedTaskQueryData().map((info: Task) => (
            <TaskCard key={info.id} taskInfo={info} />
          ))}
        </div>
      </div>
    </>
  );
}
export default Task;
