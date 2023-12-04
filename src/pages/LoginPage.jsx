import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authServerAPI } from "redux/modules/api";
import styled from "styled-components";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

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
  };

  const onClickLoginHandler = async () => {
    try {
      const response = await authServerAPI.post("/login", {
        id: email,
        password: password,
      });

      let userInfo;

      if (null != response.data && true === response.data.success) {
        userInfo = response.data;
        // dispatch();
        localStorage.setItem("userInfo", JSON.Stringfy(userInfo));
      }

      alert("로그인 성공!");
      navigate("/home");

      // form.submit();

      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <STWrapper>
      <STHeader></STHeader>
      <STMain>
        <STLoginForm name="form" onSubmit={onClickLoginHandler}>
          <LoginTitle>로그인</LoginTitle>
          <STEmailLabel htmlfor="id"></STEmailLabel>
          <STEmailInput
            type="email"
            placeholder="아이디"
            name="email"
            value={email}
            onChange={onChange}
          ></STEmailInput>
          <STPasswordLabel htmlfor="password"></STPasswordLabel>
          <STPasswordInput
            type="password"
            placeholder="비밀번호"
            name="password"
            value={password}
            onChange={onChange}
          ></STPasswordInput>
          <button type="submit">로그인</button>
          <Link to="/join">회원가입</Link>
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
