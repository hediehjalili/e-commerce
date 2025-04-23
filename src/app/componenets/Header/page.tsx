"use client";
import React, {  useState } from "react";
import {
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Box,
  Container,
  InputBase,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import AppBar from '@mui/material/AppBar';
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Image from "next/image";

const Header: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
  };

  const drawerContent = (
    <Box sx={{ width: 250, p: 2 }}>
      {/* Logo */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          mb: 2,
        }}
      >
        <Image src="/logo.svg" alt="لوگو" width={100} height={40} priority />
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
          mb: 2,
          p: 1,
        }}
      >
        <InputBase
          placeholder="جستجوی محصولات..."
          sx={{
            flex: 1,
            px: 1,
            fontSize: "0.9rem",
            fontFamily: "Vazir",
          }}
        />
        <IconButton sx={{ color: "#606C38" }}>
          <SearchIcon fontSize="medium" />
        </IconButton>
      </Box>

      {/* User Icons */}
      <List>
        <ListItem>
          <ListItemIcon>
            <AccountCircleIcon sx={{ color: "#606C38" }} />
          </ListItemIcon>
          <ListItemText primary="پروفایل" sx={{ fontFamily: "Vazir" }} />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemIcon>
            <FavoriteBorderIcon sx={{ color: "#606C38" }} />
          </ListItemIcon>
          <ListItemText primary="علاقه‌مندی‌ها" sx={{ fontFamily: "Vazir" }} />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemIcon>
            <ShoppingCartIcon sx={{ color: "#606C38" }} />
          </ListItemIcon>
          <ListItemText primary="سبد خرید" sx={{ fontFamily: "Vazir" }} />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar position="sticky" color="transparent" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: { xs: "row", sm: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: { xs: 1, sm: 4 },
            py: 2,
          }}
        >
          {/* Hamburger Menu (Only on Mobile) */}
          <IconButton
            sx={{ display: { xs: "block", sm: "none" }, color: "#606C38" }}
            onClick={() => toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              flexGrow: { xs: 1, sm: 0 },
            }}
          >
            <Image
              src="/logo.svg"
              alt="لوگو"
              width={100}
              height={40}
              priority
            />
            <Typography
              variant="h6"
              sx={{
                color: "#606C38",
                fontFamily: "Vazir",
                fontWeight: "bold",
                fontSize: { xs: "0.9rem", sm: "1.25rem" },
              }}
            >
              فروشگاه وین
            </Typography>
          </Box>

          {/* Search Bar (Only on Desktop) */}
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
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

          {/* User Icons (Only on Desktop) */}
          <Stack
            direction="row"
            spacing={2}
            sx={{
              display: { xs: "none", sm: "flex" },
              justifyContent: "flex-end",
              flexWrap: "wrap",
            }}
          >
            <IconButton
              sx={{ color: "#606C38" }}
              onClick={() => (window.location.href = "/auth/login")}
            >
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

      {/* Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
      >
        {drawerContent}
      </Drawer>
    </AppBar>
  );
};

export default Header;
