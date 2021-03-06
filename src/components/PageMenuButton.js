import React from 'react';
import styled from 'styled-components';

const PageMenuButtonComponent = styled.button`
cursor: pointer;
font-family: 'Fredericka the Great', cursive;
background: none;
border:none;
font-size: 16px;
text-decoration: none;
@media screen and (min-width: 800px) {
  font-size: 1.5vw;
}`

const PageMenuButton = ({ handleMenuClick, isSelected = false, value, label }) => (
  <PageMenuButtonComponent
    onClick={handleMenuClick}
    value={value}
    style={{ fontWeight: isSelected ? '800' : '500' }}
  >
    {label}
  </PageMenuButtonComponent>
);

export default PageMenuButton;
