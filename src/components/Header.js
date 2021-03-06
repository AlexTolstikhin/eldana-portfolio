import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import PageMenuButton from './PageMenuButton';
import '../styles/header_animation.css';

const HeaderBar = styled.div`
  min-height: 50px;
`;

const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  padding: 10px 60px;
  font-family: 'Open Sans', sans-serif;
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
  font-family: 'Fredericka the Great', cursive;
  font-weight: 800;
  @media screen and (min-width: 800px) {
    font-size: 1.5vw;
  }
`

const Header = () => {
  const nameElement = useRef();
  const menuElement = useRef();
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    const animatedElements = [menuElement, nameElement];
    if (currentPath !== location.pathname) {
      animatedElements.forEach((elRef) => {
        elRef.current.className="";
        void elRef.current.offsetWidth;
        elRef.current.className="slide-up-down";
      });
      setCurrentPath(location.pathname);
    }
  }, [location.pathname, currentPath]);

  return (
    <>
      <HeaderBar>
        <HeaderSection>
          <div ref={nameElement} className="slide-down">
            <p style={{ fontSize: '18px', margin: 0, fontWeight: 600 }}>Eldana Niyetbek</p>
            <p style={{ fontSize: '12px', fontWeight: 500 }}>Mechanical Engineer</p>
          </div>
          <div ref={menuElement} className="slide-down">
            <Link to="/eldana-portfolio">
              <PageMenuButton
                isSelected={currentPath === '/eldana-portfolio' || currentPath === '/eldana-portfolio/'}
                value="work"
                label="Work"
              >
                Work
              </PageMenuButton>
            </Link>
            <PageMenuSlash>{` / `}</PageMenuSlash>
            <Link to="/eldana-portfolio/about">
              <PageMenuButton
                isSelected={currentPath === '/eldana-portfolio/about'}
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