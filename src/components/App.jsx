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
      <Button>測試</Button>
      <Button disabled>測試</Button>
    </>
  );
}

export default App;
