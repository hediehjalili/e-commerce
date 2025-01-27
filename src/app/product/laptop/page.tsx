"use client";

import React from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Image from "next/image";

export default function ProductCard() {
  // وضعیت موجودی (true برای موجود، false برای عدم موجودی)
  const inStock = true;

  return (
    <Card
      sx={{
        maxWidth: 300,
        borderRadius: "12px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
        border: "1px solid #e0e0e0",
      }}
    >
      {/* تصویر محصول */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          py: 2,
          backgroundColor: "#f9f9f9",
        }}
      >
        <Image
          src="/images/macbook.png" // مسیر تصویر محصول
          alt="لپ تاپ اپل"
          width={200}
          height={150}
          style={{ objectFit: "contain" }}
        />
      </Box>

      {/* اطلاعات محصول */}
      <CardContent
        sx={{
          textAlign: "right", // راست‌چین
          p: 2,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Vazir",
            fontSize: "1.2rem",
            fontWeight: "bold",
            color: "#333",
            mb: 1,
          }}
        >
          لپ تاپ اپل
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontFamily: "Vazir",
            color: "#888",
            fontSize: "0.9rem",
            mb: 2,
          }}
        >
          لپ تاپ مدل MacBook Air
        </Typography>

        {/* قیمت و وضعیت موجودی */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Vazir",
              color: "#BC6C25",
              fontSize: "1.2rem",
              fontWeight: "bold",
            }}
          >
            ۳۰,۰۰۰,۰۰۰ تومان
          </Typography>
          <Typography
            sx={{
              fontFamily: "Vazir",
              fontSize: "0.9rem",
              color: inStock ? "#28a745" : "#dc3545", // رنگ وضعیت بر اساس موجودی
            }}
          >
            {inStock ? "موجود" : "ناموجود"}
          </Typography>
        </Box>

        {/* دکمه افزودن به سبد خرید */}
        {inStock && (
          <Button
            variant="contained"
            fullWidth
            sx={{
              fontFamily: "Vazir",
              fontWeight: "bold",
              backgroundColor: "#606C38",
              color: "#fff",
              "&:hover": { backgroundColor: "#4a5530" },
              borderRadius: "24px",
              py: 1,
            }}
          >
            افزودن به سبد خرید
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
