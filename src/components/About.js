import React from 'react';
import styled from 'styled-components';

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding: 0 60px;
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

const StyledImage = styled.img`
  border-radius: 5px;
  box-shadow: 2px 2px 10px;
`;


const About = () => (
  <div>
    <FlexBox style={{ marginTop: '40px' }}>
      <ContentWrapper>
        <h2>About me</h2>
        <p>
          You can use this space here to write a bit more about the work you show on the side.
          PS: You can duplicate and flip this layer too, helping you to quickly build a elegant layout.
        </p>
      </ContentWrapper>
      <ContentWrapper style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <StyledImage
          alt="Eldana Nietbek"
          height="200px"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.WJpP1SPWIHAfDWzsqtk1XwHaGV%26pid%3DApi&f=1"
        />
      </ContentWrapper>
    </FlexBox>
    <section style={{ marginTop: '60px' }}>
      <FlexBox style={{ justifyContent: 'space-around' }}>
        <div>
          <h4 style={{ margin: 0 }}>Work History</h4>
        </div>
        <div>
          <h4 style={{ margin: 0 }}>Clients</h4>
        </div>
        <div>
          <h4 style={{ margin: 0 }}>Contact</h4>
        </div>
      </FlexBox>
      <FlexBox style={{ justifyContent: 'space-around' }}>
        <div>
          <p>Work History</p>
        </div>
        <div>
          <p>Clients</p>
        </div>
        <div>
          <p>Contact</p>
        </div>
      </FlexBox>
    </section>
  </div>
);

export default About;