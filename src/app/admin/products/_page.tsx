"use client";
import React, { useState, ChangeEvent } from "react";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
} from "@mui/material";
import { Add, Edit, Delete } from "@mui/icons-material";

// Define the Product interface
interface Product {
  id: number;
  name: string;
  price: string;
  stock: number;
}

export default function ProductsPage() {
  const [open, setOpen] = useState<boolean>(false);
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: "لپ تاپ اپل", price: "۳۰,۰۰۰,۰۰۰ تومان", stock: 15 },
    { id: 2, name: "هدفون بلوتوثی", price: "۲,۵۰۰,۰۰۰ تومان", stock: 30 },
  ]);

  const [newProduct, setNewProduct] = useState<Omit<Product, "id">>({
    name: "",
    price: "",
    stock: 0,
  });

  // Open the dialog
  const handleOpen = () => setOpen(true);

  // Close the dialog
  const handleClose = () => {
    setOpen(false);
    setNewProduct({ name: "", price: "", stock: 0 }); // Reset form
  };

  // Handle input change
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({
      ...prev,
      [name]: name === "stock" ? Number(value) : value,
    }));
  };

  // Add a new product
  const handleAddProduct = () => {
    if (newProduct.name.trim() && newProduct.price.trim() && newProduct.stock > 0) {
      const newId = products.length > 0 ? Math.max(...products.map((p) => p.id)) + 1 : 1;
      setProducts((prev) => [...prev, { id: newId, ...newProduct }]);
      handleClose();
    }
  };

  // Delete a product
  const handleDeleteProduct = (id: number) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 4 }}>
        <Typography variant="h4" sx={{ fontFamily: "Vazir", color: "#606C38" }}>
          مدیریت محصولات
        </Typography>
        <Button
          variant="contained"
          startIcon={<Add />}
          sx={{
            backgroundColor: "#BC6C25",
            "&:hover": { backgroundColor: "#a55b1d" },
          }}
          onClick={handleOpen}
        >
          محصول جدید
        </Button>
      </Box>

      {/* Product Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ backgroundColor: "#606C38" }}>
            <TableRow>
              <TableCell sx={{ color: "white", fontFamily: "Vazir" }}>نام محصول</TableCell>
              <TableCell sx={{ color: "white", fontFamily: "Vazir" }}>قیمت</TableCell>
              <TableCell sx={{ color: "white", fontFamily: "Vazir" }}>موجودی</TableCell>
              <TableCell sx={{ color: "white", fontFamily: "Vazir" }}>عملیات</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell sx={{ fontFamily: "Vazir" }}>{product.name}</TableCell>
                <TableCell sx={{ fontFamily: "Vazir" }}>{product.price}</TableCell>
                <TableCell sx={{ fontFamily: "Vazir" }}>{product.stock}</TableCell>
                <TableCell>
                  <IconButton color="primary">
                    <Edit />
                  </IconButton>
                  <IconButton color="error" onClick={() => handleDeleteProduct(product.id)}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Dialog for Adding a Product */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ fontFamily: "Vazir" }}>افزودن محصول جدید</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="نام محصول"
            name="name"
            fullWidth
            value={newProduct.name}
            onChange={handleInputChange}
            sx={{ mt: 2, fontFamily: "Vazir" }}
          />
          <TextField
            margin="dense"
            label="قیمت (تومان)"
            name="price"
            fullWidth
            value={newProduct.price}
            onChange={handleInputChange}
            sx={{ fontFamily: "Vazir" }}
          />
          <TextField
            margin="dense"
            label="موجودی"
            name="stock"
            type="number"
            fullWidth
            value={newProduct.stock}
            onChange={handleInputChange}
            sx={{ fontFamily: "Vazir" }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{ color: "#606C38" }}>
            لغو
          </Button>
          <Button
            variant="contained"
            onClick={handleAddProduct}
            sx={{
              backgroundColor: "#BC6C25",
              "&:hover": { backgroundColor: "#a55b1d" },
            }}
          >
            ذخیره
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}