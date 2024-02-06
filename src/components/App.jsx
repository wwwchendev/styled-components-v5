import { Outlet } from 'react-router-dom'
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
      <Outlet />
    </>
  );
}

export default App;
