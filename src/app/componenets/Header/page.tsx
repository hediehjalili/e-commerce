"use client";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Box,
  Container,
  InputBase,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Image from "next/image";

export default function Header() {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar sx={{ gap: 4, py: 2 }}>
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Image src="/logo.svg" alt="لوگو" width={120} height={50} priority />
            <Typography
              variant="h6"
              sx={{
                color: "#606C38",
                fontFamily: "Vazir",
                fontWeight: "bold",
              }}
            >
              فروشگاه وین
            </Typography>
          </Box>

          {/* Search Bar */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "white",
              borderRadius: "8px",
              border: "1px solid #e0e0e0",
              flexGrow: 1,
              maxWidth: "500px",
              flexDirection: "row-reverse",
            }}
          >
            <InputBase
              placeholder="جستجوی محصولات..."
              sx={{
                flex: 1,
                px: 2,
                py: 1,
                fontSize: "0.9rem",
                fontFamily: "Vazir",
              }}
            />
            <IconButton sx={{ color: "#606C38", p: 1 }}>
              <SearchIcon fontSize="medium" />
            </IconButton>
          </Box>

          {/* User Icons */}
          <Stack direction="row" spacing={1}>
            <IconButton sx={{ color: "#606C38" }}>
              <AccountCircleIcon fontSize="medium" />
            </IconButton>
            <IconButton sx={{ color: "#606C38" }}>
              <FavoriteBorderIcon fontSize="medium" />
            </IconButton>
            <IconButton sx={{ color: "#606C38" }}>
              <ShoppingCartIcon fontSize="medium" />
            </IconButton>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}