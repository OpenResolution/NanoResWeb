import { Button } from "@mui/material";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { useState } from "react";
import ConfigForm from "./ConfigForm";

function Config() {
  const [newConfigModalOpen, setNewConfigModalOpen] = useState(false);
  const handleNewConfigButtonClick = () => {
    setNewConfigModalOpen(true);
  };
  const handleNewConfigModalClose = () => {
    setNewConfigModalOpen(false);
  };
  return (
    <>
      <div className="flex justify-start items-center p-4 border-b-2 border-b-gray-400">
        <Button variant="contained" onClick={handleNewConfigButtonClick}>
          New Config
        </Button>
      </div>
      <Dialog
        open={newConfigModalOpen}
        onClose={handleNewConfigModalClose}
        scroll="paper"
      >
        <DialogTitle>New Config</DialogTitle>
        <DialogContent>
          <div className="px-4">
            <ConfigForm />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default Config;
