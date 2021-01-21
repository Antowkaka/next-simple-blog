import React from 'react';
import styled from 'styled-components';

const StyledSingleBlock = styled.div`
  display: flex;
  height: 80vh;
  justify-content: flex-start;
  width: 50%;
  flex-direction: column;
`;

const SinglePostBlock = ({ children }: any): JSX.Element => (
  <StyledSingleBlock>{children}</StyledSingleBlock>
);

export default SinglePostBlock;
