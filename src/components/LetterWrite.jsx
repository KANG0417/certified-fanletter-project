import React from "react";
import styled from "styled-components";

function LetterWrite() {
  return (
    <LetterWrapper>
      <LetterForm>
        <LetterNickName>닉네임 </LetterNickName>
        <LetterContent
          placeholder="내용을 100자 이내로 입력해주세요!"
          maxLength={100}
        ></LetterContent>
        <BottomBox>
          <SeleterMember>
            <SeleterMemberList>멤버를 선택해주세요!</SeleterMemberList>
            <SeleterMemberList>로제</SeleterMemberList>
            <SeleterMemberList>제니</SeleterMemberList>
            <SeleterMemberList>지수</SeleterMemberList>
            <SeleterMemberList>리사</SeleterMemberList>
          </SeleterMember>
          <LetterAddBtn>팬레터 등록</LetterAddBtn>
        </BottomBox>
      </LetterForm>
    </LetterWrapper>
  );
}

export default LetterWrite;

const LetterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  font-family: "Orbit", sans-serif;
`;

const LetterForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 300px;
  border: 3px solid var(--black);
  border-radius: 10px;
  background-color: var(--deep-pink);
`;

const LetterNickName = styled.h2``;

const LetterContent = styled.textarea`
  width: 350px;
  height: 100px;
  resize: none;
`;

const BottomBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SeleterMember = styled.select``;

const SeleterMemberList = styled.option``;

const LetterAddBtn = styled.button``;
