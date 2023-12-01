import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Login() {
  return (
    <STWrapper>
      <STHeader></STHeader>
      <STMain>
        <STLoginForm>
          <LoginTitle>로그인</LoginTitle>
          <STEmailLabel htmlfor="id"></STEmailLabel>
          <STEmailInput type="text" placeholder="아이디"></STEmailInput>
          <STPasswordLabel htmlfor="password"></STPasswordLabel>
          <STPasswordInput
            type="password"
            placeholder="비밀번호"
          ></STPasswordInput>
          <button type="submit">로그인</button>
          <Link to="join">회원가입</Link>
        </STLoginForm>
      </STMain>
    </STWrapper>
  );
}

export default Login;

const STWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 500px;
  height: 800px;
`;

const STHeader = styled.header``;

const STMain = styled.main``;

const STLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--light-pink);
  border-radius: 15px;
  width: 500px;
  height: 400px;
`;

const LoginTitle = styled.h2`
  font-size: 2rem;
  font-family: "Orbit", sans-serif;
`;

const STEmailInput = styled.input``;

const STEmailLabel = styled.label``;

const STPasswordLabel = styled.label``;

const STPasswordInput = styled.input``;
