import { Dialog, DialogTitle } from "@material-ui/core";

const DialogueForm = (props) => {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add a new Transaction</DialogTitle>
    </Dialog>
  );
};

export default DialogueForm;
