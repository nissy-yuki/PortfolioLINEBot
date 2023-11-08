import { SxProps, TextField, Theme } from "@mui/material";

type P = {
  id: string;
  label: string;
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>,
  required: boolean;
  style?: SxProps<Theme>;
};

export function BasicTextField(props: P) {
  const onChangeHandle = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    props.setState(e.target.value);
  };

  return (
    <TextField 
      id={props.id} 
      label={props.label} 
      variant="standard" 
      value={props.state}
      onChange={onChangeHandle}
      required={props.required}
      sx= {props.style}
      multiline
    />
  );
}
