"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Typography,
  TextField,
  Button,
  Link,
  InputAdornment,
  IconButton,
  CircularProgress,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// اسکیما برای اعتبارسنجی فرم
const loginSchema = z.object({
  email: z.string().email("ایمیل معتبر وارد کنید."),
  password: z.string().min(6, "رمز عبور باید حداقل ۶ کاراکتر باشد."),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) router.push("/admin");
  }, [router]);

  const handleTogglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const onSubmit = async (data: LoginFormData) => {
    setLoading(true);
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        localStorage.setItem("token", result.token);
        router.push("/admin");
      } else {
        alert(result.message || "ورود ناموفق بود.");
      }
    } catch {
      alert("خطا در ارتباط با سرور.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        p: 3,
        bgcolor: "white",
        maxWidth: 450,
        mx: "auto",
        boxShadow: 2,
        borderRadius: 2,
      }}
    >
      <Image src="/logo.svg" alt="لوگو" width={148} height={48} />
      <Typography variant="h5" sx={{ color: "#606C38", mt: 2 }}>
        به W!N Store خوش آمدید
      </Typography>

      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ width: "100%", mt: 3 }}>
        {/* فیلد ایمیل */}
        <TextField
          fullWidth
          label="ایمیل"
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
          label="رمز عبور"
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

        {/* دکمه ورود */}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          disabled={loading}
          sx={{
            mt: 3,
            py: 1.5,
            backgroundColor: "#606C38",
            "&:hover": { backgroundColor: "#4a5530" },
          }}
          startIcon={loading ? <CircularProgress size={20} color="inherit" /> : null}
        >
          {loading ? "در حال ورود..." : "ورود"}
        </Button>

        {/* لینک‌ها */}
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          <Link href="/auth/register" variant="body2" sx={{ color: "#a55b1d" }}>
            ثبت نام
          </Link>
          <Link href="#" variant="body2" sx={{ color: "#a55b1d" }}>
            بازیابی رمز عبور
          </Link>
        </Box>
      </Box>
    </Box>
  );
}