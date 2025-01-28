"use client";

import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import { JSX } from "react";

export default function Banner(): JSX.Element {
  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: "300px", md: "500px" },
        borderRadius: "16px",
        overflow: "hidden",
        mb: 4,
      }}
    >
      <Image
        src="/images/banner.svg"
        alt="بنر اصلی"
        fill
        priority
        style={{ objectFit: "cover" }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          right: "10%",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(96, 108, 56, 0.9)",
          p: 4,
          borderRadius: "12px",
          maxWidth: "500px",
        }}
      >
        <Typography
          variant="h3"
          sx={{ color: "white", fontFamily: "Vazir", fontWeight: "bold" }}
          gutterBottom
        >
          جدیدترین محصولات دیجیتال
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "white", fontFamily: "Vazir", mb: 3 }}
        >
          با بهترین کیفیت و مناسب‌ترین قیمت
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#BC6C25",
            "&:hover": { backgroundColor: "#a55b1d" },
            fontFamily: "Vazir",
            fontWeight: "bold",
          }}
        >
          مشاهده محصولات
        </Button>
      </Box>
    </Box>
  );
}