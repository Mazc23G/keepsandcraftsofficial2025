import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import BuildIcon from "@mui/icons-material/Build";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const OurService = () => {
  const services = [
    {
      title: "Custom Crafting",
      description:
        "Handmade custom crafts designed to match your style and preferences.",
      icon: <BuildIcon sx={{ fontSize: 40, color: "#1976d2" }} />,
    },
    {
      title: "Creative Design",
      description:
        "Personalized designs to bring your ideas to life with creativity.",
      icon: <DesignServicesIcon sx={{ fontSize: 40, color: "#1976d2" }} />,
    },
    {
      title: "Online Store",
      description:
        "Explore our exclusive collection of crafts in our online store.",
      icon: <ShoppingCartIcon sx={{ fontSize: 40, color: "#1976d2" }} />,
    },
  ];

  return (
    <Box sx={{ padding: { xs: 2, md: 6 }, backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      {/* Page Title */}
      <Typography
        variant="h3"
        sx={{ textAlign: "center", fontWeight: 700, marginBottom: 4 }}
      >
        Our Services
      </Typography>

      {/* Services Grid */}
      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                textAlign: "center",
                padding: 3,
                borderRadius: "16px",
                boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
                transition: "0.3s ease",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 12px 24px rgba(0,0,0,0.2)",
                },
              }}
            >
              <Box sx={{ marginBottom: 2 }}>{service.icon}</Box>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: 1 }}>
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OurService;


