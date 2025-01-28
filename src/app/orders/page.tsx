"use client";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Container,
  Card,
  Typography,
  Button,
  Stack,
  Divider,
  Box,
  useMediaQuery,
  Theme,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Image from "next/image";

// تعریف نوع برای آیتم‌های سبد خرید
interface CartItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

const CartPage: React.FC = () => {
  const [items, setItems] = useState<CartItem[]>([
    { id: 1, name: "کالا ۱", quantity: 1, price: 65200 },
    { id: 2, name: "کالا ۲", quantity: 1, price: 65200 },
    { id: 3, name: "کالا ۳", quantity: 1, price: 65200 },
  ]);

  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleDelete = (itemId: number): void => {
    setItems(items.filter((item) => item.id !== itemId));
  };

  return (
    <div dir="rtl">
      {/* هدر ریسپانسیو */}
      <AppBar position="static" sx={{ bgcolor: "#606C38", color: "white" }}>
        <Toolbar sx={{ gap: 2 }}>
          <IconButton
            edge="start"
            sx={{ display: { xs: "none", sm: "flex" } }}
            onClick={() => (window.location.href = "/")}
          >
            <ArrowBackIcon sx={{ color: "white" }} />
          </IconButton>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              fontSize: isMobile ? "1rem" : "1.25rem",
            }}
          >
            سبد خرید شما
          </Typography>

          <IconButton onClick={() => (window.location.href = "/")}>
            <Image
              src="/logo.svg"
              alt="لوگو"
              width={isMobile ? 30 : 50}
              height={isMobile ? 30 : 40}
            />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* محتوای اصلی */}
      <Container sx={{ py: 4 }}>
        <Typography variant="subtitle1" color="textSecondary" mb={3}>
          {items.length} مورد در سبد شما
        </Typography>

        {/* لیست آیتم‌ها */}
        <Card
          sx={{
            p: 2,
            mb: 2,
            "&:hover": { boxShadow: 3 },
          }}
        >
          <Stack spacing={2}>
            {items.map((item) => (
              <Stack
                key={item.id}
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{
                  "&:hover": { bgcolor: "action.hover" },
                  p: 1,
                  borderRadius: 1,
                }}
              >
                <Box>
                  <Typography variant={isMobile ? "body2" : "body1"}>
                    {item.name} ({item.quantity} عدد)
                  </Typography>
                  <Typography
                    fontWeight="bold"
                    variant={isMobile ? "body2" : "body1"}
                  >
                    {(item.price * item.quantity).toLocaleString()} تومن
                  </Typography>
                </Box>
                <IconButton
                  color="error"
                  onClick={() => handleDelete(item.id)}
                  sx={{
                    "&:hover": { bgcolor: "error.light" },
                    p: 1,
                  }}
                >
                  <DeleteIcon fontSize={isMobile ? "small" : "medium"} />
                </IconButton>
              </Stack>
            ))}
          </Stack>
        </Card>

        {/* بخش پرداخت */}
        <Card sx={{ p: 2, boxShadow: 3 }}>
          <Stack spacing={2}>
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="h6">مجموع کل:</Typography>
              <Typography variant="h6" color="#BC6C25" fontWeight="bold">
                {total.toLocaleString()} تومن
              </Typography>
            </Stack>

            <Divider />

            <Stack
              direction={isMobile ? "column" : "row"}
              spacing={2}
              justifyContent="flex-start"
            >
              <Button
                variant="outlined"
                fullWidth={isMobile}
                sx={{
                  bgcolor: "#606C38",
                  color: "white",
                  "&:hover": { bgcolor: "#4a5530" },
                }}
              >
                ادامه خرید
              </Button>

              <Button
                variant="contained"
                fullWidth={isMobile}
                sx={{
                  bgcolor: "#BC6C25",
                  color: "white",
                  "&:hover": { bgcolor: "#a55b1d" },
                }}
              >
                پرداخت نهایی
              </Button>
            </Stack>
          </Stack>
        </Card>
      </Container>
    </div>
  );
};

export default CartPage;