import React from 'react';
import styled from 'styled-components';

const PageMenuButtonComponent = styled.button`
cursor: pointer;
background: none;
border:none;
font-size: 13px;
@media screen and (min-width: 800px) {
  font-size: 1.3vw;
}`

const PageMenuButton = ({ handleMenuClick, isSelected = false, value, label }) => (
  <PageMenuButtonComponent
    onClick={handleMenuClick}
    value={value}
    style={{ textDecoration: isSelected ? 'underline' : 'none' }}
  >
    {label}
  </PageMenuButtonComponent>
);

export default PageMenuButton;
