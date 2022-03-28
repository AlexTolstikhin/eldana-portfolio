import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import SubTitle from './SubTitle';
import '../styles/body_animation.css';
import ProfilePhoto from '../assets/profile_photo.jpg'
import ResumePDF from '../assets/Eldana_Niyetbek.pdf';
import ResumeImage from '../assets/resume.png';



const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
  @media screen and (min-width: 500px) {
    margin: 0 auto;
    max-width: 80%;
  }
  @media screen and (min-width: 1000px) {
    max-width: 60%;
  }
`;

const StyledImage = styled.img`
  border-radius: 5px;
  margin-top: 40px;
  box-shadow: 2px 2px 10px;
  cursor: pointer;
`;

const StyledButton = styled.button`
  background-color: #9597A3;
  border-radius: 10px;
  position: relative;
  border: 0px;
  box-shadow: 2px 2px 10px;
  cursor: pointer;
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  height: 50px;
  padding: 0 20px;
  :hover {
    bottom: 3px;
    box-shadow: 2px 2px 20px;
  }
`;


const About = () => {
  const downloadResume = () => {
    window.open(ResumePDF, '_blank');
  };

  const onImageClick = () => {
    window.open('https://www.linkedin.com/in/eldananiyetbek/', '_blank');
  }

  return (
    <section className="opacity-show">
      <FlexBox>
        <Title>About me</Title>
        <SubTitle>
          My experience includes
          full-time assisting in model-based design and production engineering of products
          for datacenters using CAD/BIM tools to create one integrated process involving all
          disciplines.
        </SubTitle>
      </FlexBox>
      <hr style={{ maxWidth: '40%' }}/>
      <FlexBox>
        <StyledImage
          alt="Eldana Nietbek"
          height="250px"
          onClick={onImageClick}
          src={ProfilePhoto}
        />
      </FlexBox>
      <FlexBox >
        <div style={{ marginTop: '40px' }}>
          <StyledButton
            onClick={downloadResume}
          >
            Download CV
          </StyledButton>
        </div>
        <StyledImage
          alt="Eldana Nietbek CV"
          height="100%"
          onClick={downloadResume}
          src={ResumeImage}
          width="100%"
        />
      </FlexBox>
    </section>
  );
}


export default About;