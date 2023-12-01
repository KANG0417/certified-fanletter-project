import React from "react";
import styled from "styled-components";
import HeaderImg from "assets/image/블랙핑크.단체.jpg";
import LogoImg from "assets/logo/blackpinkLogo.png";
import { Link } from "react-router-dom";
import Tabs from "./Tabs";

function Header() {
  return (
    <>
      <Nav>
        <NavList>
          <ListItem>내 프로필</ListItem>
          <ListItem>로그아웃</ListItem>
        </NavList>
      </Nav>
      <TabContainer>
        <LogoLink to="/" />
        <Tabs />
      </TabContainer>
    </>
  );
}

export default Header;

const TabContainer = styled.header`
  background-image: url(${HeaderImg});
  background-repeat: no-repeat;
  width: 600px;
  height: 350px;
  border-radius: 20px;
  margin: 20px auto;
  border: 3px solid var(--black);
`;

const LogoLink = styled(Link)`
  display: block;
  background-image: url(${LogoImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin: 170px auto 10px auto;
  width: 300px;
  height: 66px;
`;

const Nav = styled.nav``;

const NavList = styled.ul`
  display: flex;
  justify-content: end;
  align-items: center;
  background-color: var(--black);
  width: 100%;
  height: 70px;
  font-size: 2rem;
`;

const ListItem = styled.li`
  cursor: pointer;
  width: 100px;
  height: 30px;
  margin: 5px;
  padding-top: 5px;
  border-radius: 10px;
  color: var(--light-pink);
  font-family: "Orbit", sans-serif;
  text-align: center;
`;
