"use client";

import { prefixer } from "stylis";
import stylisRTLPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { JSX, PropsWithChildren } from "react";
import { CssBaseline, ThemeProvider as MuiThemeProvider } from "@mui/material";
import Theme from "./theme";

// ایجاد کش برای RTL
const cacheRtl = createCache({
  key: "muirtl", // کلید یکتا برای کش RTL
  stylisPlugins: [prefixer, stylisRTLPlugin],
  prepend: true, // استایل‌ها را در ابتدای <head> قرار می‌دهد
});

const ThemeProvider = ({ children }: PropsWithChildren): JSX.Element => {
  return (
    <CacheProvider value={cacheRtl}>
      <MuiThemeProvider theme={Theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </CacheProvider>
  );
};

export default ThemeProvider;
