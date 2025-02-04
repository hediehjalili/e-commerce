"use client";

import React, { JSX, useState } from "react";
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
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

// Define Theme
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
const registerSchema = z
  .object({
    fullName: z
      .string()
      .min(3, "نام و نام خانوادگی باید حداقل ۳ کاراکتر باشد."),
    email: z.string().email("آدرس ایمیل معتبر نیست."),
    password: z
      .string()
      .min(6, "رمز عبور باید حداقل ۶ کاراکتر باشد.")
      .max(20, "رمز عبور نباید بیشتر از ۲۰ کاراکتر باشد."),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "رمز عبور و تأیید رمز عبور یکسان نیستند.",
  });

type RegisterFormData = z.infer<typeof registerSchema>;

export default function RegisterPage(): JSX.Element {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    setLoading(true);

    try {
      // ارسال اطلاعات فرم به سرور برای ثبت‌نام
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        // اگر ثبت‌نام موفق بود، توکن را ذخیره می‌کنیم
        localStorage.setItem("token", result.token);

        // نمایش پیام موفقیت
        toast.success("ثبت‌نام با موفقیت انجام شد!");

        // هدایت به صفحه ورود
        router.push("/auth/login");
      } else {
        // نمایش خطا در صورت ناموفق بودن ثبت‌نام
        toast.error(result.message || "ثبت‌نام ناموفق بود.");
      }
    } catch (error) {
      toast.error("خطا در ارتباط با سرور.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <CacheProvider value={cacheRTL}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ToastContainer />
        <Box
          sx={{
            bgcolor: "background.paper",
            p: 4,
            borderRadius: 2,
            boxShadow: 3,
            maxWidth: 500,
            mx: "auto",
            mt: 5,
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom align="center">
            <span style={{ color: "#BC6C25" }}>ثبت نام</span>
          </Typography>

          <Typography
            variant="body1"
            color="textSecondary"
            align="center"
            gutterBottom
          >
            <span style={{ color: "#606C38" }}>لطفا موارد زیر را پر کنید</span>
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 3 }}
          >
            {/* Full Name Field */}
            <TextField
              fullWidth
              label="نام و نام خانوادگی"
              placeholder="نام و نام خانوادگی خود را وارد کنید"
              margin="normal"
              variant="outlined"
              {...register("fullName")}
              error={!!errors.fullName}
              helperText={errors.fullName?.message}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <PersonOutlineIcon
                      sx={{ color: "gray", cursor: "pointer" }}
                    />
                  </InputAdornment>
                ),
              }}
            />

            {/* Email Field */}
            <TextField
              fullWidth
              label="آدرس ایمیل"
              placeholder="آدرس ایمیل خود را وارد کنید"
              type="email"
              margin="normal"
              variant="outlined"
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <MailOutlineIcon
                      sx={{ color: "gray", cursor: "pointer" }}
                    />
                  </InputAdornment>
                ),
              }}
            />

            {/* Password Field */}
            <TextField
              fullWidth
              label="رمز عبور"
              placeholder="رمز عبور خود را وارد کنید"
              type={showPassword ? "text" : "password"}
              margin="normal"
              variant="outlined"
              {...register("password")}
              error={!!errors.password}
              helperText={errors.password?.message}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            {/* Confirm Password Field */}
            <TextField
              fullWidth
              label="تأیید رمز عبور"
              placeholder="تأیید رمز عبور خود را وارد کنید"
              type={showConfirmPassword ? "text" : "password"}
              margin="normal"
              variant="outlined"
              {...register("confirmPassword")}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword?.message}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowConfirmPassword((prev) => !prev)}
                    >
                      {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            {/* Submit Button */}
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
                  backgroundColor: "#BC6C25",
                },
              }}
              disabled={loading}
            >
              {loading ? "در حال ثبت‌نام..." : "ثبت نام"}
            </Button>

            {/* Login Link */}
            <Box sx={{ mt: 2, textAlign: "center" }}>
              <Typography variant="body2">
                حساب کاربری دارید؟{" "}
                <Link href="/auth/login" color="#606C38">
                  ورود
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </CacheProvider>
  );
}