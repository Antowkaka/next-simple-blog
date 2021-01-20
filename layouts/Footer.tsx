import React from "react";
import  Link  from 'next/link';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: #464b4e;
  display: flex;
  justify-content: center;
  height: 60px;
  align-items: center;
  a {
    font-size: 1.5rem;
    text-align: center;
    color: #ffefd5; 
  }
`;

const Footer = (): JSX.Element => {
    return (
        <StyledFooter>
            <p>Copyright © 2021</p>
        </StyledFooter>
    )
}

export default Footer;