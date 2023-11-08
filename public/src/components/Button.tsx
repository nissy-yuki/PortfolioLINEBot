import { Button, SxProps, Theme } from "@mui/material";

type P = {
  id: string;
  label: string;
  type: "submit" | "reset" | "button" | undefined;
  onClick?: () => void;
  style?: SxProps<Theme>;
}

export function BasicButton(props: P) {
  return <Button id={props.id} variant="contained" type={props.type} onClick={props.onClick} sx={props.style}>{props.label}</Button>;
}
