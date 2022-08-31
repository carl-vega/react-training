import { useMemo } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  /* 
  ^ Pass a “create” function and an array of dependencies. useMemo will only
  ^ recompute the memoized value when one of the dependencies has changed. 
  ^ This optimization helps to avoid expensive calculations on every render.
  */

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* add app here to use the provided theme */}
    </ThemeProvider>
  );
}