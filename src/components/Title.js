import React from 'react';
import styled from 'styled-components';

const PageTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 25px;
  margin-top: 40px;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Fredericka the Great', cursive;
  user-select: none;
  font-weight: 700;
  @media screen and (min-width: 800px) {
    font-size: 4vw;
  }
`;

const Title = ({ children }) => (
  <PageTitle>
    {children}
  </PageTitle>
);

export default Title;