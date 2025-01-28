"use client";
import React from "react";
import AdminLayout from "../layout";
import { Typography, Button, Box, Grid, TextField } from "@mui/material";

export default function CategoriesPage() {
  return (
    <AdminLayout>
      <Typography variant="h4" sx={{ mb: 4 }}>
        مدیریت دسته‌بندی‌ها
      </Typography>
      {/* فرم اضافه کردن دسته‌بندی */}
      <Box sx={{ mb: 4 }}>
        <TextField label="نام دسته‌بندی" fullWidth sx={{ mb: 2 }} />
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#606C38",
          }}
        >
          اضافه کردن
        </Button>
      </Box>
      {/* لیست دسته‌بندی‌ها */}
      <Grid container spacing={2}>
        {[...Array(5)].map((_, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box sx={{ p: 2, border: "1px solid #ddd", borderRadius: "8px" }}>
              <Typography>دسته {index + 1}</Typography>
              <Button
                variant="outlined"
                sx={{
                  mt: 2,
                  color: "white",
                  borderColor: "#BC6C25",
                  backgroundColor: "#BC4343",
                }}
              >
                حذف
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </AdminLayout>
  );
}
