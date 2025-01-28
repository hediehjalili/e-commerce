"use client";

import { Box, Button, Typography } from "@mui/material";
import { Add } from "@mui/icons-material";
import { useState } from "react";
import ProductTable from "./components/ProductTable";
import AddProductDialog from "./components/AddProductDialog";

export interface Product {
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

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    stock: "",
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setNewProduct({ name: "", price: "", stock: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.price && newProduct.stock) {
      const newId =
        products.length > 0 ? Math.max(...products.map((p) => p.id)) + 1 : 1;

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

      <ProductTable products={products} onDelete={handleDeleteProduct} />

      <AddProductDialog
        open={open}
        onClose={handleClose}
        onSave={handleAddProduct}
        product={newProduct}
        onChange={handleInputChange}
      />
    </Box>
  );
}