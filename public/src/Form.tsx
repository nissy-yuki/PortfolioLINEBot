import { Stack } from "@mui/material";
import { useRef, useState } from "react";
import { BasicTextField } from "./components/TextField";
import { BasicButton } from "./components/Button";
import { BasicDialog } from "./components/Dialog";
import { BasicSnackBar } from "./components/SnackBar";
import { BasicText } from "./components/Text";
import { sendMessageUrl } from "./env/url";

export function Form() {
  const [message, setMessage] = useState("");
  const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);
  const [isSnackBarOpen, setIsSnackBarOpen] = useState(false);
  const submitProcessing = useRef(false);
  const pushMessageProcessing = useRef(false);

  async function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    if (submitProcessing.current) return;
    submitProcessing.current = true;
    e.preventDefault();
    setIsConfirmDialogOpen(true);
  }

  async function sendMessage() {
    if (pushMessageProcessing.current) return;
    pushMessageProcessing.current = true;
    await fetch(sendMessageUrl, {
      method: "POST",
      mode: 'cors',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: message
      })
    }).then((res) => {
      if (res.ok) {
        setIsSuccessDialogOpen(true);
      } else {
        setIsSnackBarOpen(true);
      }
    }).catch((err) => {
      setIsSnackBarOpen(true);
    });
    submitProcessing.current = false;
  }

  function closeConfirmDialog() {
    setIsConfirmDialogOpen(false);
    submitProcessing.current = false;
  }

  function closeSuccessDialog() {
    pushMessageProcessing.current = false;
    window.close();
  }

  function closeSnackBar() {
    setIsSnackBarOpen(false);
  }

  return (
    <form onSubmit={submitHandler}>
      <Stack alignItems="center" spacing={2}>
        <BasicText id="description-text" content={"入力したメッセージを送信することができます。\n匿名で送信されるため、直接やり取りをしたい場合はプロフィールのメールアドレスから直接ご連絡ください。"} style={{width: "80%", whiteSpace: "pre-line"}}></BasicText>
        <BasicTextField id="message" label="メッセージ" state={message} setState={setMessage} required={true} style={{width: "80%"}}/>
        <BasicButton id="submit" label="送信" type="submit" style={{width: "80%"}}/>
        <BasicSnackBar id="send-message-error" content={"メッセージの送信に失敗しました。\n再度メッセージの送信をお試しください。"} isOpen={isSnackBarOpen} handleClose={closeSnackBar} serverity="error"/>
        <BasicDialog id="send-message-confirm" title="送信確認" content={message} isOpen={isConfirmDialogOpen} handleClose={closeConfirmDialog} confirmLabel="送信" handleConfirm={sendMessage}/>
        <BasicDialog id="send-message-complete" title="送信完了" content="メッセージを送信しました。" isOpen={isSuccessDialogOpen} handleClose={closeSuccessDialog} />
      </Stack>
    </form>
  );
}