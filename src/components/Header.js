import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import PageMenuButton from './PageMenuButton';

const HeaderBar = styled.div`
  background: #d5d3d3;
  min-height: 50px;
  box-shadow: 2px 2px 10px;
`;

const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  padding: 10px 60px;
  margin: auto;
  position: relative;
  user-select: none;
  @media screen and (min-width: 480px) {
    flex-direction: row;
    max-width: 80%;
  }
  @media screen and (min-width: 800px) {
    max-width: 60%;
  }
`;

const PageMenuSlash = styled.span`
  font-size: 15px;
  user-select: none;
  @media screen and (min-width: 800px) {
    font-size: 1.5vw;
  }
`

const Header = () => {
  const location = useLocation();
  return (
    <>
      <HeaderBar>
        <HeaderSection>
          <div>
            <p style={{ margin: 0, fontWeight: 600 }}>Eldana Niyetbek</p>
            <p style={{ fontSize: '9px', fontWeight: 500 }}>Mechanical Engineer</p>
          </div>
          <div>
            <Link to="/">
              <PageMenuButton
                isSelected={location.pathname === '/'}
                value="work"
                label="Work"
              >
                Work
              </PageMenuButton>
            </Link>
            <PageMenuSlash>{` / `}</PageMenuSlash>
            <Link to="/about">
              <PageMenuButton
                isSelected={location.pathname === '/about'}
                label="About"
                value="about"
              >
                About
              </PageMenuButton>
            </Link>
          </div>
        </HeaderSection>
      </HeaderBar>
    </>
  );
};

export default Header;