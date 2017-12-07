import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const customTheme = {
  palette: { 
    primary1Color: '#081c24',
    textColor: '#081c24',
  }
};

const theme = getMuiTheme(customTheme);

export default theme;