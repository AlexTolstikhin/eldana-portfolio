import React from 'react';
import './App.css';
import styled from 'styled-components';
import './styles/body_animation.css';

const PageTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 25px;
  margin-top: 40px;
  text-align: center;
  text-transform: uppercase;
  font-family: Georgia;
  user-select: none;
  font-weight: 700;
  @media screen and (min-width: 800px) {
    font-size: 4vw;
  }
`;

const PageSubTitle = styled.p`
  font-size: 14px;
  text-align: center;
  text-transform: uppercase;
  font-family: Georgia;
  user-select: none;
  @media screen and (min-width: 800px) {
    font-size: 2vw;
  }
`;



function HomePage() {
  return (
    <section className="opacity-show">
      <PageTitle>
        <div>The Collective</div>
        <div>Work of Eldana Niyetbek</div>
      </PageTitle>
      <PageSubTitle>
        <div>Intro text underneath the headline</div>
      </PageSubTitle>
      <hr style={{ maxWidth: '100px' }}/>
    </section>
  );
}

export default HomePage;
