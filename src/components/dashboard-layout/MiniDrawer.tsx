"use client";
import * as React from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DrawerHeader from "./components/DrawerHeader";
import Drawer from "./components/Drawer";
import { DrawerContext } from "./DrawerProvider";
import { SIDEBAR_ITEMS } from "./constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MiniDrawer() {
  const pathname = usePathname();
  const { isOpen, handleClose } = React.useContext(DrawerContext);
  return (
    <Drawer variant="permanent" open={isOpen}>
      <DrawerHeader>
        <IconButton onClick={handleClose}>
          <ChevronRightIcon />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {SIDEBAR_ITEMS.map(({ text, href, Icon }) => (
          <ListItem key={text} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              selected={pathname === href}
              component={Link}
              href={href}
              sx={{
                minHeight: 48,
                px: 2.5,
                justifyContent: isOpen ? "initial" : "center",
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  justifyContent: "center",
                  mr: isOpen ? 3 : "auto",
                }}
              >
                <Icon />
              </ListItemIcon>
              <ListItemText primary={text} sx={{ opacity: isOpen ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
