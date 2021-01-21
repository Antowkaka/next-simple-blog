import React from 'react';
import styled from 'styled-components';

import { IComment } from '../type';

const StyledComment = styled.div`
  width: 100%;
  background-color: #457e8c;
  border-radius: 20px;
  margin-top: 10px;
  padding: 10px;
`;

const Comment = ({ body }: IComment): JSX.Element => {
  return (
    <StyledComment>
      <p>{body}</p>
    </StyledComment>
  );
};

export default Comment;
