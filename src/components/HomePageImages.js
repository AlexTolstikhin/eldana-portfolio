import React from 'react';
import styled from 'styled-components';
import ProjectImage from './ProjectImage';

const Container = styled.section`
  margin-top: 50px;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 600px) {
    flex-direction: row;
  }
  img {
    vertical-align: bottom;
  }
`;

const HomePageImages = () => {

  return (
    <Container>
    <Flex>
      <ProjectImage />
      <ProjectImage />
    </Flex>
    <Flex>
      <ProjectImage />
      <ProjectImage />
    </Flex> 
  </Container>
  );
};

export default HomePageImages;