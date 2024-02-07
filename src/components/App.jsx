import { Outlet } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body{
  background: white;
  min-height: 100vh;
  margin: 0;
  color: black;
  font-family: 'Noto Sans TC', '微軟正黑體', 'Microsoft JhengHei', sans-serif;
  min-height: 100vh;
}
a{
  text-decoration: none;
}
`;

const theme = {
  primaryColor: '#f8049c',
  secondaryColor: '#fdd54f',
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
