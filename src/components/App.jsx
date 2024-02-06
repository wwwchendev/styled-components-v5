import { Button } from '@/components/common';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body{
  background: white;
  min-height: 100vh;
  margin: 0;
  color: black;
  font-family: 'Protest Riot', sans-serif;
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <h1>Hello Styled Components!</h1>
      <Button>標準</Button>
      <Button disabled>disabled</Button>
      <Button secondary>測試props</Button>
      <Button large>large按鈕</Button>
      <Button large secondary>
        large按鈕
      </Button>
      <Button large disabled>
        large按鈕
      </Button>
    </>
  );
}

export default App;
