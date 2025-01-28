"use client";

import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Grid,
} from "@mui/material";
import Image from "next/image";

// تعریف نوع برای محصولات
interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  inStock: boolean;
}

// لیست محصولات
const products: Product[] = [
  {
    id: 1,
    name: "لپ تاپ اپل",
    description: "لپ تاپ مدل MacBook Air",
    price: "۳۰,۰۰۰,۰۰۰ تومان",
    image: "/images/macbook.png",
    inStock: true,
  },
  {
    id: 2,
    name: "هدفون بلوتوثی",
    description: "هدفون موزیک آپولو مدل AP200",
    price: "۲,۵۰۰,۰۰۰ تومان",
    image: "/images/heads.png",
    inStock: true,
  },
  {
    id: 3,
    name: "ساعت هوشمند",
    description: "ساعت هوشمند اندروید",
    price: "۵,۰۰۰,۰۰۰ تومان",
    image: "/images/watch.png",
    inStock: false,
  },
  {
    id: 4,
    name: "کنسول بازی",
    description: "پلی استیشن 5",
    price: "۳۵,۰۰۰,۰۰۰ تومان",
    image: "/images/consolee.png",
    inStock: true,
  },
];

const ProductList: React.FC = () => {
  return (
    <Box sx={{ py: 4, px: 2 }}>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.id}>
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
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={150}
                  style={{ objectFit: "contain" }}
                />
              </Box>

              {/* اطلاعات محصول */}
              <CardContent sx={{ textAlign: "right", p: 2 }}>
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
                  {product.name}
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
                  {product.description}
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
                    {product.price}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Vazir",
                      fontSize: "0.9rem",
                      color: product.inStock ? "#28a745" : "#dc3545",
                    }}
                  >
                    {product.inStock ? "موجود" : "ناموجود"}
                  </Typography>
                </Box>

                {/* دکمه افزودن به سبد خرید */}
                {product.inStock && (
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
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductList;