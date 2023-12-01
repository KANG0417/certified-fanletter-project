import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function LetterViews() {
  return (
    <ViewsContainer>
      <Link to="detail/1"></Link>
    </ViewsContainer>
  );
}

export default LetterViews;

const ViewsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  font-family: "Orbit", sans-serif;
  width: 600px;
  height: 600px;
  border: 3px solid var(--black);
  border-radius: 10px;
  background-color: var(--deep-pink);
  margin: 20px auto;
`;
