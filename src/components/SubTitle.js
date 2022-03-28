import React from 'react';
import styled from 'styled-components';

const PageSubTitle = styled.p`
  font-size: 14px;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Open Sans', sans-serif;
  user-select: none;
  @media screen and (min-width: 800px) {
    font-size: 1vw;
  }
`;

const SubTitle = ({ children }) => (
  <PageSubTitle>
    {children}
  </PageSubTitle>
);

export default SubTitle;