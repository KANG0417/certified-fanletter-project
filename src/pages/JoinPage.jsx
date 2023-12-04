import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authServerAPI, jsonServerAPI } from "redux/modules/api";
import styled from "styled-components";

function JoinPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    }
    if (name === "password") {
      setPassword(value);
    }
    if (name === "nickname") {
      setNickname(value);
    }
  };

  const onSumitJoinHandler = async (e) => {
    e.preventDefault();
    try {
      await authServerAPI.post("/register", {
        id: email,
        password: password,
        nickname: nickname,
      });
      alert("회원가입을 축하드립니다!");
      navigate("/login");
    } catch (error) {
      alert(error.response.data.message);
      console.log(error);
    }
  };

  return (
    <JoinWrapper>
      <JoinForm>
        <JoinHeader>
          <JoinTitle>회원가입</JoinTitle>
        </JoinHeader>
        <JoinMain>
          <EmailLabel htmlFor="joinEmail"></EmailLabel>
          <EmailInput
            type="email"
            id="joinEmail"
            name="email"
            value={email}
            onChange={onChange}
            placeholder="아이디"
          ></EmailInput>
          <PasswordLabel htmlFor="joinPassword"></PasswordLabel>
          <PasswordInput
            type="password"
            id="joinPassword"
            name="password"
            value={password}
            onChange={onChange}
            placeholder="비밀번호"
          ></PasswordInput>
          <NicknameLabel htmlFor="joinNickname"></NicknameLabel>
          <NicknameInput
            type="text"
            id="joinNickname"
            name="nickname"
            value={nickname}
            onChange={onChange}
            placeholder="닉네임(10글자 내외)"
          ></NicknameInput>
          <JoinButton type="submit" onClick={onSumitJoinHandler}>
            가입하기
          </JoinButton>
        </JoinMain>
        <Link to="/login">로그인</Link>
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

const JoinMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--light-pink);
  border-radius: 15px;
`;

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
