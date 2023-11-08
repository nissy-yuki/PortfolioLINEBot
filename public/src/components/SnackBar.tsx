import { Alert, Snackbar } from "@mui/material";

type P = {
  id: string;
  content: string;
  isOpen: boolean;
  serverity: "error" | "warning" | "info" | "success";
  handleClose: () => void;
}

export function BasicSnackBar(props: P) {
  return (
    <Snackbar open={props.isOpen} autoHideDuration={6000} onClose={props.handleClose} sx={{whiteSpace: "pre-line"}}>
      <Alert onClose={props.handleClose} severity={props.serverity}  sx={{whiteSpace: "pre-line"}}>
        {props.content}
      </Alert>
    </Snackbar>
  )
}