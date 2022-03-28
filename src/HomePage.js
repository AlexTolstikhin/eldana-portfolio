import React from 'react';
import HomePageImages from './components/HomePageImages';
import PageTitle from './components/Title';
import SubTitle from './components/SubTitle';
import './App.css';
import './styles/body_animation.css';



function HomePage() {
  return (
    <section className="opacity-show">
      <PageTitle>
        <div>The Collective</div>
        <div>Work of Eldana Niyetbek</div>
      </PageTitle>
      <SubTitle>
        <div>Intro text underneath the headline</div>
      </SubTitle>
      <hr style={{ maxWidth: '40%' }}/>
      <HomePageImages />
    </section>
  );
}

export default HomePage;
