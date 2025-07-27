import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  useMediaQuery,
  useTheme,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import BuildIcon from "@mui/icons-material/Build";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import HandymanIcon from "@mui/icons-material/Handyman";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: "Home", icon: <HomeIcon />, path: "/" },
    { text: "Our Services", icon: <BuildIcon />, path: "/our-services" },
    { text: "Contact Us", icon: <ContactMailIcon />, path: "/contact-us" },
  ];

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: theme.palette.primary.main, // ✅ Uses theme color
        paddingX: { xs: 2, md: 4 },
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)", // ✅ Polished shadow
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo with Icon */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            gap: 1,
            color: "white",
          }}
        >
          <HandymanIcon sx={{ fontSize: 28 }} /> Keeps & Crafts Official 2025
        </Typography>

        {/* Desktop Menu */}
        {!isMobile ? (
          <Box>
            {menuItems.map((item) => (
              <Button
                key={item.text}
                startIcon={item.icon}
                component={Link}
                to={item.path}
                sx={{
                  color: "white",
                  marginLeft: 3,
                  textTransform: "none",
                  fontWeight: 500,
                  fontSize: "1rem",
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.15)",
                    borderRadius: "8px",
                    transition: "0.3s ease",
                  },
                }}
              >
                {item.text}
              </Button>
            ))}
          </Box>
        ) : (
          // Mobile Menu Icon
          <IconButton color="inherit" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 280, backgroundColor: "#f5f5f5", height: "100%" }}>
          {/* Drawer Header */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "1rem",
              backgroundColor: theme.palette.primary.main,
              color: "white",
            }}
          >
            <Typography variant="h6" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <HandymanIcon /> Menu
            </Typography>
            <IconButton onClick={toggleDrawer(false)} sx={{ color: "white" }}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Divider />

          {/* Menu Items */}
          <List>
            {menuItems.map((item) => (
              <ListItem
                button
                key={item.text}
                component={Link}
                to={item.path}
                onClick={toggleDrawer(false)}
                sx={{
                  "&:hover": {
                    backgroundColor: theme.palette.action.hover,
                  },
                }}
              >
                <ListItemIcon sx={{ color: theme.palette.primary.main }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
