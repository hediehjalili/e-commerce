"use client";
import { Box, Button, Typography, Container } from "@mui/material";
import { Add } from "@mui/icons-material";
import { useState } from "react";
import ProductTable from "./components/_ProductTable";
import AddProductDialog from "./components/_AddProductDialog";

export interface Product {
  id: number;
  name: string;
  price: string;
  stock: number;
}

export interface NewProduct {
  name: string;
  price: string;
  stock: string;
}

const ProductsPage: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: "لپ تاپ اپل", price: "۳۰,۰۰۰,۰۰۰ تومان", stock: 15 },
    { id: 2, name: "هدفون بلوتوثی", price: "۲,۵۰۰,۰۰۰ تومان", stock: 30 },
  ]);

  const [newProduct, setNewProduct] = useState<NewProduct>({
    name: "",
    price: "",
    stock: "",
  });

  const handleOpen = (): void => setOpen(true);
  const handleClose = (): void => {
    setOpen(false);
    setNewProduct({ name: "", price: "", stock: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddProduct = (): void => {
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

  const handleDeleteProduct = (id: number): void => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", my: 4 }}>
        <Typography variant="h4" sx={{ fontFamily: "Vazir", color: "#37474F", fontWeight: "bold" }}>
          مدیریت محصولات
        </Typography>
        <Button
          variant="contained"
          startIcon={<Add />}
          sx={{
            backgroundColor: "#1976D2",
            "&:hover": { backgroundColor: "#1565C0" },
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
    </Container>
  );
};

export default ProductsPage;