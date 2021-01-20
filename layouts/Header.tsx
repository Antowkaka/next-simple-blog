import React from "react";
import Head from 'next/head';
import  Link  from 'next/link';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: #0070f3;
  display: flex;
  justify-content: space-around;
  height: 60px;
  align-items: center;
  
  a {
    font-size: 1.5rem;
    text-align: center;
    color: papayawhip;
    margin-left: 10px;
    
    &:hover{
      color: #deb37f;
    } 
  }
`;

const Header = (): JSX.Element => {
    return (
        <StyledHeader>
            <div>
                <h1>Simple Blog</h1>
            </div>
            <div>
                <Link href="/"><a>Home</a></Link>
                <Link href="/posts/new"><a>New post</a></Link>
            </div>
        </StyledHeader>
    )
}

export default Header;


