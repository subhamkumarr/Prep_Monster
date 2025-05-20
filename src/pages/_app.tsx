import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from '../theme';
import type { ComponentType } from 'react';

type CustomAppProps = Omit<AppProps, 'Component'> & {
  Component: ComponentType<any>;
};

export default function App({ Component, pageProps }: CustomAppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
} 