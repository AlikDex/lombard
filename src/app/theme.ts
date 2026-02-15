import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '.faq-content': {
          lineHeight: 1.5,
          // Стилизуем вложенный HTML через селекторы в sx
          '& ul': {
            margin: 0,
            paddingLeft: '10px', // 10px маловато для буллитов
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

export default theme
