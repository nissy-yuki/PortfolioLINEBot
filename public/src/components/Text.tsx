import {Box, SxProps, Theme, Typography} from "@mui/material"

type P = {
  id: string;
  content: string;
  style?: SxProps<Theme>;
}

export function BasicText(props: P) {
  return (
    <Typography id={props.id} component="div" sx={props.style}>
      <Box textAlign="justify" m={1} >
        {props.content}
      </Box>
    </Typography>
  )
}