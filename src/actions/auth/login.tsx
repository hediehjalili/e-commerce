"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
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

// ایجاد تم راست‌چین برای MUI
const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "Vazir, Arial",
  },
});

const cacheRTL = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

// تعریف اسکیما برای اعتبارسنجی فرم
const loginSchema = z.object({
  email: z.string().email("ایمیل معتبر وارد کنید."),
  password: z
    .string()
    .min(6, "رمز عبور باید حداقل ۶ کاراکتر باشد.")
    .max(20, "رمز عبور نباید بیش از ۲۰ کاراکتر باشد."),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/admin");
    }
  }, []);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit = async (data: LoginFormData) => {
    setLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        localStorage.setItem("token", result.token); // ذخیره توکن در localStorage
        router.push("/admin"); // هدایت به صفحه ادمین
      } else {
        setErrorMessage(result.message || "ورود ناموفق بود.");
      }
    } catch (error) {
      setErrorMessage("خطا در ارتباط با سرور.");
    } finally {
      setLoading(false);
    }
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
          {/* بخش فرم لاگین */}
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
              {/* فیلد ایمیل */}
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

              {/* فیلد رمز عبور */}
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

              {errorMessage && (
                <Typography color="error" sx={{ mt: 1, mb: 1 }}>
                  {errorMessage}
                </Typography>
              )}

              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={loading}
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
                {loading ? "در حال ورود..." : "ورود"}
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

          {/* تصویر پس‌زمینه */}
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