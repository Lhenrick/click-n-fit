// src/theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  cssVariables: true, // this tells MUI to generate CSS variables

  palette: {
    mode: "dark", // optional, can toggle to "dark"
    primary: {
      main: "#CC3300", // becomes --mui-palette-primary-main
    },
    secondary: {
      main: "#EEEEEE", // becomes --mui-palette-secondary-main
    },
    background: {
      default: "#222831", // becomes --mui-palette-background-default
    },
    text: {
      primary: "#ffff", // becomes --mui-palette-text-primary
    },
  },

  typography: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    h1: { fontFamily: `"Poppins", sans-serif` },
    h2: { fontFamily: `"Poppins", sans-serif` },
  },
});

export default theme;
