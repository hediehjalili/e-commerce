"use client";
import {
  CssBaseline,
  Box,
  Typography,
  TextField,
  Button,
  Link,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import Image from "next/image";

const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "Vazir, Arial",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
          @font-face {
            font-family: 'Vazir';
            font-style: normal;
            font-display: swap;
            src: url('/fonts/Vazir.woff2') format('woff2');
          }
        `,
    },
  },
});

// کش RTL برای استایل‌ها
const cacheRTL = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

export default function LoginPage() {
  return (
    <CacheProvider value={cacheRTL}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            minHeight: "100vh", // Full height
            bgcolor: "background.default", // Background color
          }}
        >
          {/* Left Side - Form */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              p: 3,
              bgcolor: "white",
            }}
          >
            <Typography variant="h5" sx={{ color: "#606C38", mb: 3 }}>
              w!n Store
            </Typography>
            <Box sx={{ mb: 3 }}>
              <Image
                src="/logo.svg"
                alt="لوگو"
                width={148}
                height={48}
                objectFit="contain"
              />
            </Box>
            <Box
              component="form"
              sx={{
                mt: 2,
                width: "100%",
                maxWidth: 400,
              }}
            >
              <TextField
                fullWidth
                label="آدرس ایمیل"
                margin="normal"
                variant="outlined"
              />

              <TextField
                fullWidth
                label="رمز عبور"
                type="password"
                margin="normal"
                variant="outlined"
              />

              <Button
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  padding: 2,
                  backgroundColor: "#606C38",
                  "&:hover": {
                    backgroundColor: "#a55b1d",
                  },
                }}
              >
                ورود
              </Button>

              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Link href="#" variant="body2">
                  ثبت نام
                </Link>
                <Link href="#" variant="body2">
                  بازیابی رمز عبور
                </Link>
              </Box>
            </Box>
          </Box>

          {/* Right Side - Full Screen Image */}
          <Box
            sx={{
              flex: 1,
              position: "relative", // For Image positioning
              minHeight: "100vh", // Full height
            }}
          >
            <Image
              src="/pic.png" // Path to the image in the public folder
              alt="Background"
              layout="fill" // Makes the image cover the entire box
              objectFit="cover" // Ensures the image scales properly
              priority // Optimizes image loading
            />
          </Box>
        </Box>
      </ThemeProvider>
    </CacheProvider>
  );
}
