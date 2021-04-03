import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import { colors } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgb(20, 20, 20)',
    },
    secondary: {
      main: '#e50914',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#141414',
      dark: 'rgb(20, 20, 20)',
      paper: colors.common.white,
    },
    text: {
        primary: colors.common.white,
    }
  },
});

export default theme;