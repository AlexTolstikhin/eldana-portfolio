import React from 'react';
import styled from 'styled-components';

const ImageHover = styled.div`
  background-image: linear-gradient(53deg, rgba(2,0,36,1) 0%, rgba(198,198,219,1) 35%, rgba(0,212,255,1) 100%);
  height: 100%;
  opacity: 0.1;
  position: absolute;
  top: 0;
  transition: opacity 2s ease-in;
  width: 100%;
  z-index: 999;
  :hover {
    opacity: 0.8;
    transition: opacity 2s ease-in;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  cursor: pointer;
  width: 100%;
  height: 100%;
  @media screen and (min-width: 600px) {
    width: 50%;
  }
`;


const ProjectImage = () =>
  <ImageWrapper>
    <img alt="" src="https://via.placeholder.com/400" height="100%" width="100%"/>
    <ImageHover />
  </ImageWrapper>;

export default ProjectImage;