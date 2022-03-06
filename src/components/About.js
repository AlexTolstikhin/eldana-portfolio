import React from 'react';
import styled from 'styled-components';

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding: 0 60px;
  margin-top: 40px;
  @media screen and (min-width: 500px) {
    max-width: 80%;
  }
  @media screen and (min-width: 1000px) {
    max-width: 60%;
    flex-direction: row;
    align-items: center;
  }
`;

const ContentWrapper = styled.div`
  margin: 10px;
`;


const About = () => (
  <div>
    <FlexBox>
      <ContentWrapper>
        <h2>About me</h2>
        <p>
          You can use this space here to write a bit more about the work you show on the side.
          PS: You can duplicate and flip this layer too, helping you to quickly build a elegant layout.
        </p>
      </ContentWrapper>
      <ContentWrapper style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img
          alt="Eldana Nietbek"
          height="200px"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.WJpP1SPWIHAfDWzsqtk1XwHaGV%26pid%3DApi&f=1"
        />
      </ContentWrapper>
    </FlexBox>
    <FlexBox style={{ justifyContent: 'space-around' }}>
      <div>
        <h4>Work History</h4>
      </div>
      <div>
        <h4>Clients</h4>
        <p>...</p>
        <p>...</p>
      </div>
      <div>
        <h4>Contact</h4>
        <p>LinkedIn: ....</p>
        <p>Email: ....</p>
      </div>
    </FlexBox>
  </div>
);

export default About;