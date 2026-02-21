import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#062B3D" }, // Texto-principal
    secondary: { main: "#F97404" }, // Accent-Orange
    background: {
      default: "#F9F5F1", // Background-Default
      paper: "#FAF9F7", // Card-Surface
    },
    text: {
      primary: "#062B3D", // Texto-principal
      secondary: "#5E5B57", // Texto-Secundario
    },
    error: { main: "#C62828" },
  },

});

export default theme;