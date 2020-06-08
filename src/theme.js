import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    primary: {
      main: '#00AAE1',
      dark: '#143C8C',
      contrastText: '#fff',
    },
    secondary: {
      main: '#64B42D',
      dark: '#008732',
      contrastText: '#fff',
    },
    error: {
      main: '#BD0043',
      contrastText: '#fff',
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          background: 'red',
        },
      },
    },
    MuiContainer: {
      root: {
        minHeight: '100vh',
      },
    },
    MuiButton: {
      root: {
        'fontWeight': 'bold',
        'backgroundColor': 'yellow',
        'margin': '10px',
        '&:hover': {
          backgroundColor: 'white',
        },
      },
    },
  },
});
