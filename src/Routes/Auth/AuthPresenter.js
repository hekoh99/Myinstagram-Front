import React from "react";
import styled from "styled-components";
import Input from "../../Components/Input";
import Button from "../../Components/Button";

const Wrapper = styled.div`
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Box = styled.div`
  ${(props) => props.theme.whiteBox}
  border-radius:0px;
  width: 100%;
  max-width: 350px;
`;

const StateChanger = styled(Box)`
  text-align: center;
  padding: 20px 0px;
`;

const Link = styled.span`
  color: ${(props) => props.theme.blueColor};
  cursor: pointer;
`;

const Form = styled(Box)`
  padding: 40px;
  padding-bottom: 30px;
  margin-bottom: 15px;
  form {
    width: 100%;
    input {
      width: 100%;
      &:not(:last-child) {
        margin-bottom: 7px;
      }
    }
    button {
      margin-top: 15px;
    }
  }
`;

export default ({
  action,
  setAction,
  email,
  nickname,
  firstname,
  lastname,
  Actsubmit,
  secret,
}) => {
  return (
    <Wrapper>
      <Form>
        {action === "Request" && (
          <form onSubmit={Actsubmit}>
            <Input placeholder={"email"} {...email} type={"email"} />
            <Button text={"Request Secret"} />
          </form>
        )}
        {action === "signUp" && (
          <form onSubmit={Actsubmit}>
            <Input placeholder={"email"} {...email} type={"email"} />
            <Input placeholder={"nickname"} {...nickname} />
            <Input placeholder={"firstname"} {...firstname} />
            <Input placeholder={"lastname"} {...lastname} />
            <Button text={"Sign Up"} />
          </form>
        )}
        {action === "Confirm" && (
          <form onSubmit={Actsubmit}>
            <Input placeholder={"secret code"} {...secret} type={"password"} />
            <Button text={"confirm secret"} />
          </form>
        )}
      </Form>
      <StateChanger>
        {action === "Request" ? (
          <>
            Don't have an account?{" "}
            <Link onClick={() => setAction("signUp")}>Sign up</Link>
          </>
        ) : (
          <>
            Have an account?{" "}
            <Link onClick={() => setAction("Request")}>Log in</Link>
          </>
        )}
      </StateChanger>
    </Wrapper>
  );
};
