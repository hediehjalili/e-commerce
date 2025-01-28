import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

// Define the Product type
export interface Product {
  id: number;
  name: string;
  price: string;
  stock: number;
}

// Props interface for ProductTable
interface ProductTableProps {
  products: Product[]; // List of products to display
  onDelete: (id: number) => void; // Function to delete a product by id
  onEdit?: (product: Product) => void; // Optional function to handle editing
}

export default function ProductTable({
  products,
  onDelete,
  onEdit,
}: ProductTableProps) {
  return (
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
              <TableCell sx={{ fontFamily: "Vazir" }}>{product.name}</TableCell>
              <TableCell sx={{ fontFamily: "Vazir" }}>{product.price}</TableCell>
              <TableCell sx={{ fontFamily: "Vazir" }}>{product.stock}</TableCell>
              <TableCell>
                {/* Edit Button */}
                {onEdit && (
                  <IconButton
                    color="primary"
                    onClick={() => onEdit(product)}
                    aria-label="edit"
                  >
                    <Edit />
                  </IconButton>
                )}
                {/* Delete Button */}
                <IconButton
                  color="error"
                  onClick={() => onDelete(product.id)}
                  aria-label="delete"
                >
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}