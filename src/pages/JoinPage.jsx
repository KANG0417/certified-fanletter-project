import React from "react";
import styled from "styled-components";

function JoinPage() {
  return (
    <JoinWrapper>
      <JoinForm>
        <JoinHeader>
          <JoinTitle>회원가입</JoinTitle>
        </JoinHeader>
        <JoinMain>
          <EmailLabel htmlFor="joinEmail"></EmailLabel>
          <EmailInput type="email" id="joinEmail"></EmailInput>
          <PasswordLabel htmlFor="joinPassword"></PasswordLabel>
          <PasswordInput type="password" id="joinPassword"></PasswordInput>
          <NicknameLabel htmlFor="joinNickname"></NicknameLabel>
          <NicknameInput type="text" id="joinNickname"></NicknameInput>
          <JoinButton type="submit">가입하기</JoinButton>
        </JoinMain>
      </JoinForm>
    </JoinWrapper>
  );
}

export default JoinPage;

const JoinWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 500px;
  height: 800px;
`;

const JoinHeader = styled.header``;

const JoinMain = styled.main``;

const JoinForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--light-pink);
  border-radius: 15px;
  width: 500px;
  height: 400px;
`;

const JoinTitle = styled.h2`
  font-size: 2rem;
  font-family: "Orbit", sans-serif;
`;

const EmailInput = styled.input``;

const EmailLabel = styled.label``;

const PasswordLabel = styled.label``;

const PasswordInput = styled.input``;

const NicknameLabel = styled.label``;

const NicknameInput = styled.input``;

const JoinButton = styled.button``;
