"use client";
import React, { useState } from "react";
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
      {/* لوگو */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
        <Image 
          src="/logo.svg" 
          alt="لوگو" 
          width={100} 
          height={40}
          priority
          style={{ objectFit: 'contain' }}
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/fallback-logo.png';
          }}
        />
        <Typography
          variant="h6"
          sx={{ color: "#606C38", fontFamily: "Vazir", fontWeight: "bold" }}
        >
          فروشگاه وین
        </Typography>
      </Box>

      {/* نوار جستجو */}
      <Box sx={{ 
        display: "flex", 
        alignItems: "center", 
        backgroundColor: "white", 
        borderRadius: "8px", 
        border: "1px solid #e0e0e0", 
        mb: 2, 
        p: 1 
      }}>
        <InputBase
          placeholder="جستجوی محصولات..."
          sx={{ flex: 1, px: 1, fontSize: "0.9rem", fontFamily: "Vazir" }}
        />
        <IconButton sx={{ color: "#606C38" }}>
          <SearchIcon fontSize="medium" />
        </IconButton>
      </Box>

      {/* منو آیتم‌ها */}
      <List>
        <ListItem button>
          <ListItemIcon>
            <AccountCircleIcon sx={{ color: "#606C38" }} />
          </ListItemIcon>
          <ListItemText 
            primary="پروفایل" 
            primaryTypographyProps={{ fontFamily: "Vazir" }}
          />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <FavoriteBorderIcon sx={{ color: "#606C38" }} />
          </ListItemIcon>
          <ListItemText 
            primary="علاقه‌مندی‌ها" 
            primaryTypographyProps={{ fontFamily: "Vazir" }}
          />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <ShoppingCartIcon sx={{ color: "#606C38" }} />
          </ListItemIcon>
          <ListItemText 
            primary="سبد خرید" 
            primaryTypographyProps={{ fontFamily: "Vazir" }}
          />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar sx={{ 
          display: "flex", 
          flexDirection: { xs: "row", sm: "row" }, 
          alignItems: "center", 
          justifyContent: "space-between", 
          gap: { xs: 1, sm: 4 }, 
          py: 2 
        }}>
          {/* منوی همبرگری */}
          <IconButton
            sx={{ 
              display: { xs: "block", sm: "none" }, 
              color: "#606C38",
              '&:hover': { backgroundColor: 'rgba(96, 108, 56, 0.1)' } 
            }}
            onClick={() => toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          {/* لوگو */}
          <Box sx={{ 
            display: "flex", 
            alignItems: "center", 
            gap: 1, 
            flexGrow: { xs: 1, sm: 0 } 
          }}>
            <Image
              src="/logo.svg"
              alt="لوگو"
              width={100}
              height={40}
              priority
              style={{ objectFit: 'contain' }}
            />
            <Typography
              variant="h6"
              sx={{ 
                color: "#606C38", 
                fontFamily: "Vazir", 
                fontWeight: "bold", 
                fontSize: { xs: "0.9rem", sm: "1.25rem" } 
              }}
            >
              فروشگاه وین
            </Typography>
          </Box>

          {/* نوار جستجو (دسکتاپ) */}
          <Box sx={{ 
            display: { xs: "none", sm: "flex" }, 
            alignItems: "center", 
            backgroundColor: "white", 
            borderRadius: "8px", 
            border: "1px solid #e0e0e0", 
            flexGrow: 1, 
            maxWidth: "500px", 
            flexDirection: "row-reverse",
            transition: '0.3s',
            '&:hover': { boxShadow: 1 } 
          }}>
            <InputBase
              placeholder="جستجوی محصولات..."
              sx={{ flex: 1, px: 2, py: 1, fontSize: "0.9rem", fontFamily: "Vazir" }}
            />
            <IconButton sx={{ 
              color: "#606C38", 
              p: 1,
              '&:hover': { backgroundColor: 'rgba(96, 108, 56, 0.1)' } 
            }}>
              <SearchIcon fontSize="medium" />
            </IconButton>
          </Box>

          {/* آیکون‌های کاربر */}
          <Stack
            direction="row"
            spacing={2}
            sx={{ 
              display: { xs: "none", sm: "flex" }, 
              justifyContent: "flex-end", 
              flexWrap: "wrap" 
            }}
          >
            <IconButton
              sx={{ 
                color: "#606C38",
                '&:hover': { backgroundColor: 'rgba(96, 108, 56, 0.1)' } 
              }}
              onClick={() => (window.location.href = "/auth/login")}
            >
              <AccountCircleIcon fontSize="medium" />
            </IconButton>
            <IconButton sx={{ 
              color: "#606C38",
              '&:hover': { backgroundColor: 'rgba(96, 108, 56, 0.1)' } 
            }}>
              <FavoriteBorderIcon fontSize="medium" />
            </IconButton>
            <IconButton sx={{ 
              color: "#606C38",
              '&:hover': { backgroundColor: 'rgba(96, 108, 56, 0.1)' } 
            }}>
              <ShoppingCartIcon fontSize="medium" />
            </IconButton>
          </Stack>
        </Toolbar>
      </Container>

      {/* دراور */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
        PaperProps={{
          sx: {
            backgroundColor: '#f5f5f5',
            boxShadow: 3
          }
        }}
      >
        {drawerContent}
      </Drawer>
    </AppBar>
  );
};

export default Header;