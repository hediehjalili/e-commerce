"use client"
import React, { useState } from "react";
import AdminLayout from "../_layout";
import { Typography, Button, Box, Grid, TextField } from "@mui/material";

// Define the Category interface
interface Category {
  id: number;
  name: string;
}

export default function CategoriesPage() {
  // State for categories
  const [categories, setCategories] = useState<Category[]>([
    { id: 1, name: "دسته ۱" },
    { id: 2, name: "دسته ۲" },
    { id: 3, name: "دسته ۳" },
  ]);

  // State for the new category name
  const [newCategory, setNewCategory] = useState<string>("");

  // Handle adding a new category
  const handleAddCategory = (): void => {
    if (newCategory.trim() === "") return;

    const newCategoryObj: Category = {
      id: categories.length > 0 ? Math.max(...categories.map((cat) => cat.id)) + 1 : 1,
      name: newCategory,
    };

    setCategories((prev) => [...prev, newCategoryObj]);
    setNewCategory(""); // Clear the input
  };

  // Handle deleting a category
  const handleDeleteCategory = (id: number): void => {
    setCategories((prev) => prev.filter((category) => category.id !== id));
  };

  return (
    <AdminLayout>
      <Typography variant="h4" sx={{ mb: 4 }}>
        مدیریت دسته‌بندی‌ها
      </Typography>

      {/* Form to Add Category */}
      <Box sx={{ mb: 4 }}>
        <TextField
          label="نام دسته‌بندی"
          fullWidth
          sx={{ mb: 2 }}
          value={newCategory}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewCategory(e.target.value)
          }
        />
        <Button
          variant="contained"
          onClick={handleAddCategory}
          sx={{
            backgroundColor: "#606C38",
            "&:hover": {
              backgroundColor: "#4a5530",
            },
          }}
        >
          اضافه کردن
        </Button>
      </Box>

      {/* List of Categories */}
      <Grid container spacing={2}>
        {categories.map((category) => (
          <Grid item xs={12} sm={6} md={4} key={category.id}>
            <Box
              sx={{
                p: 2,
                border: "1px solid #ddd",
                borderRadius: "8px",
                backgroundColor: "#f9f9f9",
                textAlign: "center",
              }}
            >
              <Typography>{category.name}</Typography>
              <Button
                variant="outlined"
                onClick={() => handleDeleteCategory(category.id)}
                sx={{
                  mt: 2,
                  color: "white",
                  borderColor: "#BC6C25",
                  backgroundColor: "#BC4343",
                  "&:hover": {
                    backgroundColor: "#a53131",
                  },
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