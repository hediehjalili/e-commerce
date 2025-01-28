// src/app/admin/products/components/AddProductDialog.tsx
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Button,
  } from "@mui/material";
  
  interface AddProductDialogProps {
    open: boolean;
    onClose: () => void;
    onSave: () => void;
    product: { name: string; price: string; stock: string };
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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