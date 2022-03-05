import './App.css';
import styled from 'styled-components';


const HeaderBar = styled.div`
  background: #d5d3d3;
  min-height: 50px;
  box-shadow: 0px -1px 0px 0px rgba(0, 0, 0, 0.15), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.43);
`;

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 60px;
`;

const PageTitle = styled.p`
  font-size: 60px;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  font-family: Oswald;
`;

function App() {
  return (
    <div>
      <HeaderBar />
      <HeaderSection>
        <h1>Eldana Niyetbek</h1>
        <h2>Work / About</h2>
      </HeaderSection>
      <PageTitle>
        <h1>The Collective</h1>
        <h1>Work of Eldana</h1>
      </PageTitle>
    </div>
  );
}

export default App;
