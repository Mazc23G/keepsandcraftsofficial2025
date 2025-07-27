import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import logo from "../Resource/Images/Front.png"; // Adjust as needed

const productImages = [
  require("../Resource/Images/product1.jpg"),
  require("../Resource/Images/product2.jpg"),
  require("../Resource/Images/product3.jpg"),
  require("../Resource/Images/product4.jpg"),
  require("../Resource/Images/product5.jpg"),
];

const LandingHere = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "90vh",
        background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      {/* Logo */}
      <Box
        component="img"
        src={logo}
        alt="logo"
        sx={{
          width: { xs: 250, sm: 300, md: 400 },
          height: "auto",
          borderRadius: "20px",
          border: "4px solid #1976d2",
          boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
          transition: "0.3s ease-in-out",
          mb: 4,
          "&:hover": {
            transform: "scale(1.03)",
            boxShadow: "0 12px 32px rgba(0,0,0,0.4)",
          },
        }}
      />

      {/* Title */}
      <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2, color: "#333" }}>
        Welcome to Keeps & Crafts
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="h6"
        sx={{
          color: "#555",
          mb: 4,
          maxWidth: "600px",
        }}
      >
        Explore our unique handcrafted products and creative designs that bring your ideas to life.
      </Typography>

      {/* Button */}
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/our-services"
        sx={{
          fontSize: "1.2rem",
          paddingX: 4,
          paddingY: 1.5,
          borderRadius: "8px",
          textTransform: "none",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          mb: 4,
          "&:hover": {
            backgroundColor: "#125ea3",
            transform: "scale(1.05)",
          },
        }}
      >
        Explore Our Services
      </Button>

      {/* Product Carousel */}
      <Box sx={{ width: "90%", maxWidth: "800px" }}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          spaceBetween={20}
          slidesPerView={2}
          loop
          style={{ borderRadius: "16px", overflow: "hidden" }}
        >
          {productImages.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`product-${index}`}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "16px",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default LandingHere;
