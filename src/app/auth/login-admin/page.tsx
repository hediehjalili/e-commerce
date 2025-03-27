"use client";

import React from "react";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import Image from "next/image";
import LoginForm from "@/components/forms/LoginForm";

// ایجاد تم راست‌چین برای MUI
import { createTheme } from "@mui/material/styles";
const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "Vazir, Arial",
  },
});
const cacheRTL = createCache({ key: "muirtl", stylisPlugins: [prefixer, rtlPlugin] });

export default function LoginPage() {
  return (
    <CacheProvider value={cacheRTL}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ display: "flex", minHeight: "100vh", width: "100%" }}>
          
          {/* بخش فرم لاگین */}
          <Box sx={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <LoginForm />
          </Box>

          {/* بخش تصویر پس‌زمینه */}
          <Box
            sx={{
              flex: 1,
              position: "relative",
              display: { xs: "none", md: "flex" }, // نمایش فقط در صفحه‌های بزرگتر از موبایل
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden", // جلوگیری از اشغال فضای اضافه
            }}
          >
            <Image
              src="/images/admin.png"
              alt="Login Background"
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