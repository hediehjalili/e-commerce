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

// Categories
const categories = [
  { name: "لپ تاپ", image: "/images/laptop.png" },
  { name: "موبایل", image: "/images/mobile.png" },
  { name: "تبلت", image: "/images/tablet.png" },
  { name: "هدفون", image: "/images/10.png" },
];

const hiddenCategories = [
  { name: "ساعت هوشمند", image: "/images/watch.png" },
  { name: "دوربین", image: "/images/camera.png" },
  { name: "کنسول بازی", image: "/images/consolee.png" },
  { name: "اسپیکر", image: "/images/speaker.png" },
];

// Main Component
const Main = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <Box sx={{ py: 4, px: 2 }}>
      {/* Main Categories */}
      <Grid container spacing={2}>
        {categories.map((category, i) => (
          <Grid item xs={12} sm={6} md={3} key={i}>
            <Card
              sx={{
                borderRadius: "12px",
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

      {/* Hidden Categories */}
      <Collapse in={showMore}>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          {hiddenCategories.map((category, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <Card
                sx={{
                  borderRadius: "12px",
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

      {/* Toggle Button */}
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
