import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMember } from "redux/modules/member";
import styled, { css } from "styled-components";

function Tabs() {
  const activeMember = useSelector((state) => state.member);
  const dispatch = useDispatch();

  const onActiveMember = (event) => {
    if (event.target === event.currentTarget) return;

    dispatch(setMember(event.target.textContent));
  };

  return (
    <STWrapper onClick={onActiveMember}>
      {/* <STTabLi>로제</STTabLi>
      <STTabLi>제니</STTabLi>
      <STTabLi>지수</STTabLi>
      <STTabLi>리사</STTabLi> */}
      <STTabLi $activeMember={activeMember}>로제</STTabLi>
      <STTabLi $activeMember={activeMember}>제니</STTabLi>
      <STTabLi $activeMember={activeMember}>지수</STTabLi>
      <STTabLi $activeMember={activeMember}>리사</STTabLi>
    </STWrapper>
  );
}

export default Tabs;

const STWrapper = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 12px;
  border-radius: 12px;
`;

const STTabLi = styled.li`
  cursor: pointer;
  ${(props) => {
    if (props.$activeMember === props.children) {
      return css`
        background-color: var(--light-pink);
        color: var(--black);
      `;
    }
    return css`
      background-color: var(--black);
      color: var(--white);
    `;
  }}

  font-size: 1.5rem;
  font-weight: 600;
  width: 80px;
  text-align: center;
  padding: 20px 8px;
  border-radius: 12px;
  transition: 0.3s;
  border: 2px solid var(--white);
  font-family: "Orbit", sans-serif;

  &:hover {
    background-color: var(--light-pink);
  }
`;
