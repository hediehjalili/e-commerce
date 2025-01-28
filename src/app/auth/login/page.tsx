"use client";
import {
  CssBaseline,
  Box,
  Typography,
  TextField,
  Button,
  Link,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import Image from "next/image";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

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
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "8px", // گوشه‌های گرد برای تمامی TextFieldها
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px", // گوشه‌های گرد برای تمامی دکمه‌ها
        },
      },
    },
  },
});

const cacheRTL = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

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
              به w!n Store خوش آمدید
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
              {/* Email Field with Icon at End */}
              <TextField
                fullWidth
                label="Email"
                placeholder="ایمیل خود را وارد کنید"
                margin="normal"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <MailOutlineIcon />
                    </InputAdornment>
                  ),
                }}
              />

              {/* Password Field with Eye Icon */}
              <TextField
                fullWidth
                label="Password"
                placeholder="رمز عبور را وارد کنید"
                type={showPassword ? "text" : "password"}
                margin="normal"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleTogglePasswordVisibility}>
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
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
                <Link href="/auth/register" variant="body2">
                  <span style={{ color: "#a55b1d" }}>ثبت نام</span>
                </Link>
                <Link href="#" variant="body2">
                  <span style={{ color: "#a55b1d" }}>بازیابی رمز عبور</span>
                </Link>
              </Box>
            </Box>
          </Box>

          {/* Right Side - Full Screen Image */}
          <Box
            sx={{
              flex: 1,
              position: "relative",
              minHeight: "100vh",
            }}
          >
            <Image
              src="/pic.png"
              alt="Background"
              layout="fill"
              objectFit="cover"
              priority
            />
          </Box>
        </Box>
      </ThemeProvider>
    </CacheProvider>
  );
}
