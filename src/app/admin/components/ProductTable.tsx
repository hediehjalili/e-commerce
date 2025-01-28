// src/app/admin/products/components/ProductTable.tsx
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
  import { Product } from "../page";
  
  interface ProductTableProps {
    products: Product[];
    onDelete: (id: number) => void;
  }
  
  export default function ProductTable({ products, onDelete }: ProductTableProps) {
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
                  <IconButton color="primary">
                    <Edit />
                  </IconButton>
                  <IconButton color="error" onClick={() => onDelete(product.id)}>
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