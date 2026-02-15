'use client'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '.faq-content': {
          lineHeight: 1.5,
          '& ul': {
            margin: '0',
            paddingLeft: '15px',
          },
          '& li': {
            marginBottom: '5px',
            listStyle: 'disc',
          },
          '& b, & strong': {
            fontWeight: 'bold',
          },
        },
      },
    },
  },
});

export default function MuiProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
