import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

export const darkTheme = createMuiTheme({
    palette: {
        primary: { 
            main: "#060606",
            contrastText: "#ffffff"
        },
        secondary: {
            main: "#32333a",
            contrastText: "#ffffff"
        },
        error:{
            main: "#b52e24"
        }
    },
});
  