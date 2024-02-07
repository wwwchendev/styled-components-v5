import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme as LightTheme } from '@/themes/light.jsx';
import { theme as DarkTheme } from '@/themes/dark.jsx';

const GlobalStyle = createGlobalStyle`
body{
  background: ${props => props.theme.bodyBackgroundColor};
  min-height: 100vh;
  margin: 0;
  color: ${props => props.theme.bodyFontColor};
  font-family: 'Noto Sans TC', '微軟正黑體', 'Microsoft JhengHei', sans-serif;
  min-height: 100vh;
}
a{
  text-decoration: none;
}
`;

function App() {
  const [theme, setTheme] = useState(LightTheme);
  return (
    <ThemeProvider
      theme={{
        ...theme,
        setTheme: () => {
          setTheme(prev => (prev.id === 'light' ? DarkTheme : LightTheme));
        },
      }}
    >
      <GlobalStyle />
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
