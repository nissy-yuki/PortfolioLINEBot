import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { BasicButton } from "./Button";

type P = {
  id: string;
  title: string;
  content: string;
  isOpen: boolean;
  handleClose: () => void;
  confirmLabel?: string;
  handleConfirm?: () => void;
}

export function BasicDialog(props: P) {
  return (
    <Dialog
      id={props.id}
      open={props.isOpen}
      onClose={props.handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {props.title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description" sx={{whiteSpace: "pre-wrap"}}>
          {props.content}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        {props.confirmLabel && props.handleConfirm ? <BasicButton id="confirm" label={props.confirmLabel} type="button" onClick={props.handleConfirm}/> : null}
        <BasicButton id="close" label="閉じる" type="button" onClick={props.handleClose}/>
      </DialogActions>
    </Dialog>
  )
}
