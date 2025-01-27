"use client";

import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import Image from "next/image";

export default function CategoryGrid({ categories }: { categories: any[] }) {
  return (
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
  );
}