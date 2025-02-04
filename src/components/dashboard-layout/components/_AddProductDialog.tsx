import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";

// Define the product type
interface Product {
  name: string;
  price: string;
  stock: string;
}

// Props for the AddProductDialog
interface AddProductDialogProps {
  open: boolean; // Controls whether the dialog is open or not
  onClose: () => void; // Function to close the dialog
  onSave: () => void; // Function to save the product
  product: Product; // The product being edited/added
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Handles input changes
}

export default function AddProductDialog({
  open,
  onClose,
  onSave,
  product,
  onChange,
}: AddProductDialogProps) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle sx={{ fontFamily: "Vazir" }}>افزودن محصول جدید</DialogTitle>
      <DialogContent>
        {/* Name Field */}
        <TextField
          autoFocus
          margin="dense"
          label="نام محصول"
          name="name"
          fullWidth
          value={product.name}
          onChange={onChange}
          sx={{ mt: 2, fontFamily: "Vazir" }}
        />

        {/* Price Field */}
        <TextField
          margin="dense"
          label="قیمت (تومان)"
          name="price"
          type="number"
          fullWidth
          value={product.price}
          onChange={onChange}
          sx={{ fontFamily: "Vazir" }}
        />

        {/* Stock Field */}
        <TextField
          margin="dense"
          label="موجودی"
          name="stock"
          type="number"
          fullWidth
          value={product.stock}
          onChange={onChange}
          sx={{ fontFamily: "Vazir" }}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} sx={{ color: "#606C38" }}>
          لغو
        </Button>
        <Button
          variant="contained"
          onClick={onSave}
          sx={{
            backgroundColor: "#BC6C25",
            "&:hover": { backgroundColor: "#a55b1d" },
          }}
        >
          ذخیره
        </Button>
      </DialogActions>
    </Dialog>
  );
}