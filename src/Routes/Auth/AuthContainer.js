import React, { useState } from "react";
import AuthPresenter from "./AuthPresenter";
import useInput from "../../Hooks/useInput";
import { useMutation } from "@apollo/client";
import {
  CONFIRM_SECRET,
  CREATE_ACCOUT,
  LOG_IN,
  SECRET_CODE,
} from "./AuthQueries";
import { toast } from "react-toastify";

export default () => {
  const [action, setAction] = useState("Request");
  const password = useInput("");
  const email = useInput("");
  const nickname = useInput("");
  const firstname = useInput("");
  const lastname = useInput("");
  const secret = useInput("");
  const [requestSecret] = useMutation(SECRET_CODE);
  const [createAccount] = useMutation(CREATE_ACCOUT);
  const [confirmSecret] = useMutation(CONFIRM_SECRET);
  const [logIn] = useMutation(LOG_IN);

  const Actsubmit = async (e) => {
    e.preventDefault();
    if (action === "Request" && email !== "") {
      try {
        await requestSecret({
          update: (_, { data }) => {
            const { RequestSecret } = data;
            if (!RequestSecret) {
              toast.error("you don't have an account yet");
              setTimeout(() => setAction("signUp"), 2000);
            } else {
              toast.success("check your mailbox to enter the secret code");
              setAction("Confirm");
            }
          },
          variables: { email: email.value },
        });
      } catch {
        toast.error("could not complete");
      }
    } else if (action === "signUp") {
      try {
        const {
          data: { CreateAccount },
        } = await createAccount({
          variables: {
            email: email.value,
            nickname: nickname.value,
            firstname: firstname.value,
            lastname: lastname.value,
          },
        });
        if (!CreateAccount) {
          toast.error("cannot create account");
        } else {
          toast.success("welcom! login now");
          setTimeout(() => setAction("Request"), 2000);
        }
      } catch {
        toast.error("cannot create account");
      }
    } else if (action === "Confirm") {
      if (email.value !== "") {
        try {
          const {
            data: { ConfirmSecret },
          } = await confirmSecret({
            variables: {
              email: email.value,
              secret: secret.value,
            },
          });
          const token = ConfirmSecret;
          if (token !== "" || token !== undefined) {
            logIn({ variables: { token } });
            window.location.reload();
          } else throw Error();
        } catch {
          toast.error("wrong secret code. did you include '.'?");
        }
      }
    }
  };

  return (
    <AuthPresenter
      setAction={setAction}
      action={action}
      password={password}
      email={email}
      nickname={nickname}
      firstname={firstname}
      lastname={lastname}
      Actsubmit={Actsubmit}
      secret={secret}
    />
  );
};
