"use client";
import * as React from "react";
import {
  Box,
  Drawer,
  CssBaseline,
  Toolbar,
  List,
  Typography,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  AppBar,
  IconButton,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Dashboard as DashboardIcon,
  Inventory as ProductsIcon,
  Category as CategoriesIcon,
  People as UsersIcon,
  ShoppingCart as OrdersIcon,
} from "@mui/icons-material";

const drawerWidth = 280;

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const drawerContent = (
    <Box sx={{ width: drawerWidth }}>
      {/* Header */}
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          py: 2,
        }}
      >
        <Avatar
          alt="Admin Avatar"
          src="/admin-avatar.png"
          sx={{
            width: 64,
            height: 64,
            mb: 1,
            backgroundColor: "#bc6c25",
            fontSize: "1.5rem",
          }}
        >
          A
        </Avatar>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ fontFamily: "Vazir", fontWeight: "bold" }}
        >
          پنل مدیریت
        </Typography>
      </Toolbar>
      <Divider />

      {/* Navigation Links */}
      <List sx={{ mt: 2 }}>
        {[
          { text: "داشبورد", icon: <DashboardIcon />, path: "/admin" },
          {
            text: "محصولات",
            icon: <ProductsIcon />,
            path: "/admin/products",
          },
          {
            text: "دسته‌بندی‌ها",
            icon: <CategoriesIcon />,
            path: "/admin/categories",
          },
          { text: "سفارشات", icon: <OrdersIcon />, path: "/admin/orders" },
          { text: "کاربران", icon: <UsersIcon />, path: "/admin/users" },
        ].map((item) => (
          <ListItem
            key={item.text}
            disablePadding
            sx={{
              "&:hover": {
                backgroundColor: "#bc6c25",
                transition: "0.3s",
              },
            }}
          >
            <ListItemButton
              href={item.path}
              sx={{
                fontFamily: "Vazir",
                px: 3,
                py: 1.5,
                "& .MuiListItemIcon-root": {
                  minWidth: "40px",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color: "white",
                  fontSize: "1.6rem",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{
                  "& span": {
                    fontSize: "1.1rem",
                    color: "white",
                    fontFamily: "Vazir",
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* AppBar */}
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#BC6C25",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          {/* Hamburger Menu Icon */}
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              fontFamily: "Vazir",
              fontWeight: "bold",
              color: "white",
            }}
          >
            پنل مدیریت
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Temporary Drawer */}
      <Drawer
        anchor="left"
        open={open}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "#606C38",
            color: "white",
            width: drawerWidth,
          },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          backgroundColor: "#f5f5f5",
          minHeight: "100vh",
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
