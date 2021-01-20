import React from "react";
import styled from "styled-components";

const MediaQueriesDiv = styled.div`
    // Extra small devices (portrait phones, less than 576px)
    @media (max-width: 576px) {
      width: 546px;
    }
    
    // Small devices (landscape phones, less than 768px)
    @media (max-width: 768px) { 
      width: 738px;
    }
    
    // Medium devices (tablets, less than 992px)
    @media (max-width: 992px) { 
      width: 962px;
    }
    
    // Large devices (desktops, less than 1200px)
    @media (max-width: 1200px) {
      width: 1170px;
    }
`;

const StyledContainer = styled(MediaQueriesDiv)`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = ({ children }: any): JSX.Element => (
    <StyledContainer>
        {children}
    </StyledContainer>
)

export default Container;