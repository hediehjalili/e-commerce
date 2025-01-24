import { createTheme } from "@mui/material";
// theme.ts

export const theme = createTheme({
  direction: "rtl",
  palette: {
    primary: {
      main: "#2A59FE",
    },
    secondary: {
      main: "#FFC700",
    },
    text: {
      primary: "#1A1A1A",
      secondary: "#666666",
    },
  },
  typography: {
    fontFamily: "Vazir, Arial",
    h3: {
      fontSize: "2.5rem",
      fontWeight: 700,
    },
    h5: {
      fontSize: "1.5rem",
      fontWeight: 600,
    },
  },
});
const Theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "Vazirmatn",
  },
  shape: {
    borderRadius: 8,
  },
});

export default Theme;
