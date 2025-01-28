"use client";
import React, { useState } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Collapse,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useRouter } from "next/navigation";

// تعریف نوع برای دسته‌بندی‌ها
interface Category {
  name: string;
  image: string;
  path: string;
}

// داده‌های دسته‌بندی‌ها
const categories: Category[] = [
  { name: "لپ تاپ", image: "/images/laptop.png", path: "/product/laptop" },
  { name: "موبایل", image: "/images/mobile.png", path: "/product/mobile" },
  { name: "تبلت", image: "/images/tablet.png", path: "/product/tablet" },
  { name: "هدفون", image: "/images/10.png", path: "/product/headphone" },
];

const hiddenCategories: Category[] = [
  { name: "ساعت هوشمند", image: "/images/watch.png", path: "/product/watch" },
  { name: "دوربین", image: "/images/camera.png", path: "/product/camera" },
  {
    name: "کنسول بازی",
    image: "/images/consolee.png",
    path: "/product/console",
  },
  { name: "اسپیکر", image: "/images/speaker.png", path: "/product/speaker" },
];

// کامپوننت اصلی
const Main: React.FC = () => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const router = useRouter();

  const handleCategoryClick = (path: string) => {
    router.push(path);
  };

  return (
    <Box sx={{ py: 4, px: 2 }}>
      {/* عنوان دسته‌بندی‌ها */}
      <Typography
        variant="h5"
        fontFamily="Vazir"
        sx={{ mb: 2, textAlign: "center", color: "#606C38" }}
      >
        محصولات
      </Typography>

      {/* دسته‌بندی‌های اصلی */}
      <Grid container spacing={2}>
        {categories.map((category, i) => (
          <Grid item xs={12} sm={6} md={3} key={i}>
            <Card
              onClick={() => handleCategoryClick(category.path)}
              sx={{
                borderRadius: "12px",
                cursor: "pointer",
                "&:hover": { transform: "translateY(-5px)" },
                transition: "0.3s",
              }}
            >
              <Box
                sx={{
                  height: 200,
                  background: `url(${category.image}) center/cover no-repeat`,
                  borderRadius: "12px 12px 0 0",
                }}
              />
              <CardContent
                sx={{
                  textAlign: "center",
                  backgroundColor: "#606C38",
                  color: "white",
                }}
              >
                <Typography variant="h6" fontFamily="Vazir">
                  {category.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* دسته‌بندی‌های پنهان */}
      <Collapse in={showMore}>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          {hiddenCategories.map((category, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <Card
                onClick={() => handleCategoryClick(category.path)}
                sx={{
                  borderRadius: "12px",
                  cursor: "pointer",
                  "&:hover": { transform: "translateY(-5px)" },
                  transition: "0.3s",
                }}
              >
                <Box
                  sx={{
                    height: 200,
                    background: `url(${category.image}) center/cover no-repeat`,
                    borderRadius: "12px 12px 0 0",
                  }}
                />
                <CardContent
                  sx={{
                    textAlign: "center",
                    backgroundColor: "#606C38",
                    color: "white",
                  }}
                >
                  <Typography variant="h6" fontFamily="Vazir">
                    {category.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Collapse>

      {/* دکمه نمایش بیشتر */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
        <IconButton
          onClick={() => setShowMore((prev) => !prev)}
          sx={{
            backgroundColor: "#BC6C25",
            color: "white",
            "&:hover": { backgroundColor: "#a55b1d" },
            borderRadius: "50%",
            transform: showMore ? "rotate(180deg)" : "rotate(0)",
            transition: "transform 0.3s",
          }}
        >
          <ExpandMoreIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Main;
