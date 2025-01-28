"use client";
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
} from "@mui/material";
import { Add, Edit, Delete } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: string;
  stock: number;
}

export default function ProductsPage() {
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: "لپ تاپ اپل", price: "۳۰,۰۰۰,۰۰۰ تومان", stock: 15 },
    { id: 2, name: "هدفون بلوتوثی", price: "۲,۵۰۰,۰۰۰ تومان", stock: 30 },
  ]);
  
  // حالت‌های فرم جدید
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    stock: "",
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    // ریست کردن فرم پس از بستن دیالوگ
    setNewProduct({ name: "", price: "", stock: "" });
  };

  // مدیریت تغییرات فرم
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  // افزودن محصول جدید
  const handleAddProduct = () => {
    if (newProduct.name && newProduct.price && newProduct.stock) {
      const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
      
      setProducts((prev) => [
        ...prev,
        {
          id: newId,
          name: newProduct.name,
          price: `${Number(newProduct.price).toLocaleString()} تومان`,
          stock: Number(newProduct.stock),
        },
      ]);
      handleClose();
    }
  };

  // حذف محصول
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

      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ backgroundColor: "#606C38" }}>
            <TableRow>
              <TableCell sx={{ color: "white", fontFamily: "Vazir" }}>
                نام محصول
              </TableCell>
              <TableCell sx={{ color: "white", fontFamily: "Vazir" }}>
                قیمت
              </TableCell>
              <TableCell sx={{ color: "white", fontFamily: "Vazir" }}>
                موجودی
              </TableCell>
              <TableCell sx={{ color: "white", fontFamily: "Vazir" }}>
                عملیات
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell sx={{ fontFamily: "Vazir" }}>
                  {product.name}
                </TableCell>
                <TableCell sx={{ fontFamily: "Vazir" }}>
                  {product.price}
                </TableCell>
                <TableCell sx={{ fontFamily: "Vazir" }}>
                  {product.stock}
                </TableCell>
                <TableCell>
                  <IconButton color="primary">
                    <Edit />
                  </IconButton>
                  <IconButton 
                    color="error"
                    onClick={() => handleDeleteProduct(product.id)}
                  >
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* دیالوگ افزودن محصول */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ fontFamily: "Vazir" }}>
          افزودن محصول جدید
        </DialogTitle>
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
            type="number"
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
            sx={{
              backgroundColor: "#BC6C25",
              "&:hover": { backgroundColor: "#a55b1d" },
            }}
            onClick={handleAddProduct}
          >
            ذخیره
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}