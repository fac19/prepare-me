import { createMuiTheme } from '@material-ui/core/styles';

const primaryColor = '#000000';
const secondaryColor = '#0EB5BB';
const tertiaryColor = '#FBB03B';

export default createMuiTheme({
  siteSettings: {
    storyFontSize: '1.4rem',
  },
  typography: {
    h1: {
      fontSize: '5vh',
      fontWeight: 700,
      lineHeight: 1.5,
    },
    h2: {
      fontSize: '3vh',
    },
    h3: {
      fontSize: '2.5vh',
    },
    h4: {
      fontSize: 12,
    },
  },
  palette: {
    primary: {
      main: primaryColor,
      dark: '#143C8C',
      contrastText: '#fff',
    },
    secondary: {
      main: secondaryColor,
      dark: '#008732',
      contrastText: '#fff',
    },
    error: {
      main: tertiaryColor,
      contrastText: '#fff',
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          background: secondaryColor,
        },
      },
    },
    MuiContainer: {
      root: {
        // minHeight: "100vh",
        height: '100vh',
        background: secondaryColor,
      },
    },
    MuiGrid: {
      root: {
        // backgroundColor: secondary,
        // TODO we can't seem to get grid background
      },
    },
    MuiButton: {
      root: {
        'lineHeight': '2em',
        'padding': '20px',
        'fontSize': '2.5vh',
        'borderRadius': '30px',
        'fontWeight': 'bold',
        'backgroundColor': secondaryColor,
        'margin': '10px',
        '&:hover': {
          backgroundColor: tertiaryColor,
        },
        'color': primaryColor,
        'width': '10em',
      },
    },
  },
});
