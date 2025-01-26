"use client";
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Container,
  Menu,
  MenuItem,
  Box,
  Stack,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React, { useState } from "react";
import Image from "next/image";

// داده‌های نمونه
const categories = [
  { name: "لپ تاپ", image: "/images/laptop.png" },
  { name: "موبایل", image: "/images/mobile.png" },
  { name: "تبلت", image: "/images/tablet.png" },
  { name: "هدفون", image: "/images/10.png" },
  { name: "ساعت و مچ بند هوشمند", image: "/images/watch.png" },
  { name: "کنسول بازی", image: "/images/consolee.png" },
  { name: "دوربین", image: "/images/camera.png" },
  { name: "اسپیکر", image: "/images/speaker.png" },
];

const deals = [
  {
    id: 1,
    name: "لپ تاپ اپل",
    description: "لپ تاپپ مدل MacBook Pro MRW23 2023 LLA-M3 Pro-36GB RAM-512GB",
    price: "۳۰,۰۰۰,۰۰۰ تومان",
    image: "/images/macbook.png",
  },
  {
    id: 2,
    name: "هدفون بلوتوثی",
    description: "هدست بلوتوثی موزیک آپولو مدل AP200TWS",
    price: "۲,۵۰۰,۰۰۰ تومان",
    image: "/images/heads.png",
  },
  {
    id: 3,
    name: "اسمارت واچ",
    description: "ساعت هوشمند اندروید",
    price: "۵,۰۰۰,۰۰۰ تومان",
    image: "/images/wa.png",
  },
];

export default function HomePage() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      {/* هدر */}
      <AppBar position="static" color="transparent" elevation={0}>
        <Container maxWidth="xl">
          <Toolbar sx={{ gap: 4, py: 2 }}>
            {/* لوگو */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Image
                src="/logo.svg"
                alt="لوگو"
                width={120}
                height={50}
                priority
              />
              <Typography
                variant="h6"
                sx={{
                  color: "#606C38",
                  fontFamily: "Vazir",
                  fontWeight: "bold",
                }}
              >
                فروشگاه وین
              </Typography>
            </Box>

            {/* منوی دسته‌بندی */}
            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, gap: 3 }}
            >
              <Button
                variant="text"
                sx={{
                  color: "#606C38",
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                  "&:hover": { backgroundColor: "rgba(96, 108, 56, 0.1)" },
                }}
                onClick={handleMenuOpen}
              >
                دسته‌بندی محصولات
              </Button>

              <Menu
                id="categories-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                sx={{
                  "& .MuiPaper-root": {
                    backgroundColor: "#606C38",
                    borderRadius: "8px",
                    minWidth: "300px",
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.25)",
                  },
                }}
              >
                {categories.map((category) => (
                  <MenuItem
                    key={category.name}
                    onClick={handleMenuClose}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 3,
                      color: "white",
                      py: 2,
                      px: 3,
                      borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                      "&:last-child": { borderBottom: "none" },
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                      },
                    }}
                  >
                    <Typography variant="body1" fontFamily="Vazir">
                      {category.name}
                    </Typography>
                    <Image
                      src={category.image}
                      alt={category.name}
                      width={50}
                      height={50}
                      style={{ borderRadius: "8px", objectFit: "cover" }}
                    />
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* نوار جستجو */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "white",
                borderRadius: "8px",
                border: "1px solid #e0e0e0",
                flexGrow: 1,
                maxWidth: "500px",
                flexDirection: "row-reverse", // تغییر جهت ردیف به راست
              }}
            >
              <InputBase
                placeholder="جستجوی محصولات..."
                sx={{
                  flex: 1,
                  px: 2,
                  py: 1,
                  fontSize: "0.9rem",
                  fontFamily: "Vazir",
                }}
              />
              <IconButton sx={{ color: "#606C38", p: 1 }}>
                <SearchIcon fontSize="medium" />
              </IconButton>
            </Box>

            {/* آیکون‌های کاربر */}
            <Stack direction="row" spacing={1}>
              <IconButton
                sx={{ color: "#606C38" }}
                component="a"
                href="/auth/login"
              >
                <AccountCircleIcon fontSize="medium" />
              </IconButton>
              <IconButton sx={{ color: "#606C38" }}>
                <FavoriteBorderIcon fontSize="medium" />
              </IconButton>
              <IconButton sx={{ color: "#606C38" }}>
                <ShoppingCartIcon fontSize="medium" />
              </IconButton>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      {/* بنر اصلی */}
      <Container maxWidth="xl" sx={{ my: 4 }}>
        <Box
          sx={{
            position: "relative",
            height: { xs: "300px", md: "500px" },
            borderRadius: "16px",
            overflow: "hidden",
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
      </Container>

      {/* دسته‌بندی‌ها */}
      <Container maxWidth="xl" sx={{ my: 6 }}>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontFamily: "Vazir",
            fontWeight: "bold",
            color: "#606C38",
            mb: 4,
          }}
        >
          دسته‌بندی‌های پرطرفدار
        </Typography>
        <Grid container spacing={4}>
          {categories.map((category) => (
            <Grid item xs={12} sm={6} md={3} key={category.name}>
              <Card
                sx={{
                  borderRadius: "12px",
                  transition: "transform 0.3s",
                  "&:hover": { transform: "translateY(-5px)" },
                }}
              >
                <Box sx={{ position: "relative", height: "200px" }}>
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Box>
                <CardContent
                  sx={{
                    backgroundColor: "#606C38",
                    textAlign: "center",
                    py: 3,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ color: "white", fontFamily: "Vazir" }}
                  >
                    {category.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* پیشنهادهای ویژه */}
      <Container maxWidth="xl" sx={{ my: 6 }}>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontFamily: "Vazir",
            fontWeight: "bold",
            color: "#606C38",
            mb: 4,
          }}
        >
          پیشنهادهای ویژه امروز
        </Typography>
        <Grid container spacing={4}>
          {deals.map((deal) => (
            <Grid item xs={12} sm={6} md={4} key={deal.id}>
              <Card
                sx={{
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: 3,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box sx={{ position: "relative", height: "300px" }}>
                  <Image
                    src={deal.image}
                    alt={deal.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="h6"
                    sx={{ fontFamily: "Vazir", fontWeight: "bold" }}
                    gutterBottom
                  >
                    {deal.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontFamily: "Vazir", color: "#666", mb: 2 }}
                  >
                    {deal.description}
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#BC6C25",
                      fontFamily: "Vazir",
                      fontWeight: "bold",
                      mb: 2,
                    }}
                  >
                    {deal.price}
                  </Typography>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      backgroundColor: "#606C38",
                      "&:hover": { backgroundColor: "#4a5530" },
                      fontFamily: "Vazir",
                      fontWeight: "bold",
                      py: 1.5,
                    }}
                  >
                    افزودن به سبد خرید
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
