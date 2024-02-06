import { Outlet } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body{
  background: white;
  min-height: 100vh;
  margin: 0;
  color: black;
  font-family: 'Noto Sans TC', '微軟正黑體', 'Microsoft JhengHei', sans-serif;
  min-height: 100vh;
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Outlet />
    </>
  );
}

export default App;
