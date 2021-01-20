import React from "react";
import styled from "styled-components";

const StyledPostForm = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #799b71;
  border-radius: 20px;
  margin-top: 10px;
  padding: 10px;
`;

const StyledInput = styled.input`
  width: 80%;
  border-radius: 20px;
  height: 40px;
  font-size: 24px;
  border: none;
  outline: none;
  padding-left: 20px;
`;

const StyledTextarea = styled.textarea`
  width: 80%;
  border-radius: 20px;
  height: 80px;
  font-size: 24px;
  border: none;
  outline: none;
  margin-top: 20px;
  resize: none;
  padding-left: 20px;
`;

const StyledButton = styled.button`
  width: 80%;
  background-color: #0070f3;
  border-radius: 20px;
  height: 40px;
  font-size: 24px;
  border: none;
  outline: none;
  margin-top: 20px;
  cursor: pointer;
  color:#ffffff;
  &:hover {
    background-color: #464B4E;
  }
`;

const NewPostForm = (): JSX.Element => {


    return (
        <StyledPostForm>
            <StyledInput type="text" placeholder="Post title"/>
            <StyledTextarea placeholder="Post body"/>
            <StyledButton type="submit">Create</StyledButton>
        </StyledPostForm>
    )
}

export default NewPostForm;