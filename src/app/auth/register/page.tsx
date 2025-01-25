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
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// تنظیمات تم RTL و فونت
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
  palette: {
    primary: {
      main: "#BC6C25",
    },
  },
});

// کش RTL برای استایل‌ها
const cacheRTL = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleToggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const handleSubmit = () => {
    if (!formData.fullName.trim()) {
      toast.error("لطفاً نام و نام خانوادگی خود را وارد کنید.");
      return;
    }

    if (!formData.email.trim()) {
      toast.error("لطفاً آدرس ایمیل خود را وارد کنید.");
      return;
    }

    if (!formData.password.trim()) {
      toast.error("لطفاً رمز عبور خود را وارد کنید.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("رمز عبور و تأیید رمز عبور یکسان نیستند.");
      return;
    }

    toast.success("فرم با موفقیت ارسال شد!");
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
          <Box component="form" sx={{ mt: 3 }}>
            {/* فیلد نام و نام خانوادگی */}
            <TextField
              fullWidth
              label="نام و نام خانوادگی"
              placeholder="نام و نام خانوادگی خود را وارد کنید"
              margin="normal"
              variant="outlined"
              required
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
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

            {/* فیلد ایمیل */}
            <TextField
              fullWidth
              label="آدرس ایمیل"
              placeholder="آدرس ایمیل خود را وارد کنید"
              type="email"
              margin="normal"
              variant="outlined"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
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

            {/* فیلد رمز عبور */}
            <TextField
              fullWidth
              label="رمز عبور"
              placeholder="رمز عبور خود را وارد کنید"
              type={showPassword ? "text" : "password"}
              margin="normal"
              variant="outlined"
              required
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
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

            {/* فیلد تأیید رمز عبور */}
            <TextField
              fullWidth
              label="تأیید رمز عبور"
              placeholder="تأیید رمز عبور خود را وارد کنید"
              type={showConfirmPassword ? "text" : "password"}
              margin="normal"
              variant="outlined"
              required
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleToggleConfirmPasswordVisibility}>
                      {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            {/* دکمه ثبت نام */}
            <Button
              fullWidth
              variant="contained"
              onClick={handleSubmit}
              sx={{
                mt: 3,
                mb: 2,
                padding: 2,
                backgroundColor: "#606C38",
                "&:hover": {
                  backgroundColor: "#BC6C25",
                },
              }}
            >
              ثبت نام
            </Button>

            {/* لینک ورود */}
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
