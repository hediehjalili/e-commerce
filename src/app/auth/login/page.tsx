"use client";

import React, { useState } from "react";
import {
  Box,
  CssBaseline,
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
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Theme Configuration
const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "Vazir, Arial",
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
        },
      },
    },
  },
});

const cacheRTL = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

// Validation Schema
const loginSchema = z.object({
  email: z.string().email("ایمیل معتبر وارد کنید."),
  password: z
    .string()
    .min(6, "رمز عبور باید حداقل ۶ کاراکتر باشد.")
    .max(20, "رمز عبور نباید بیش از ۲۰ کاراکتر باشد."),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit = (data: LoginFormData) => {
    console.log("Form Data:", data);
  };

  return (
    <CacheProvider value={cacheRTL}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            minHeight: "100vh",
            bgcolor: "background.default",
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
              onSubmit={handleSubmit(onSubmit)}
              sx={{
                mt: 2,
                width: "100%",
                maxWidth: 400,
              }}
            >
              {/* Email Field */}
              <TextField
                fullWidth
                label="Email"
                placeholder="ایمیل خود را وارد کنید"
                margin="normal"
                variant="outlined"
                {...register("email")}
                error={!!errors.email}
                helperText={errors.email?.message}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <MailOutlineIcon />
                    </InputAdornment>
                  ),
                }}
              />

              {/* Password Field */}
              <TextField
                fullWidth
                label="Password"
                placeholder="رمز عبور را وارد کنید"
                type={showPassword ? "text" : "password"}
                margin="normal"
                variant="outlined"
                {...register("password")}
                error={!!errors.password}
                helperText={errors.password?.message}
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
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  padding: 2,
                  backgroundColor: "#606C38",
                  "&:hover": {
                    backgroundColor: "#4a5530",
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