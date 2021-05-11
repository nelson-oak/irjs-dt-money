import styled from 'styled-components'

const Title = styled.h1`
  color: #8257e6;

  span {
    background-color: #000;
  }
`;

function App() {
  return (
    <div className="App">
      <Title>
        Hello <span>World</span>
      </Title>
    </div>
  );
}

export { App };
