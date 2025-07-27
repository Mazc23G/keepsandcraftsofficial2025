import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";

const ContactUs = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "90vh",
        textAlign: "center",
        background: "#f4f6f8",
        padding: "2rem",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          mb: 2,
          color: "#1976d2",
        }}
      >
        Contact Us
      </Typography>

      <Typography
        variant="h6"
        sx={{
          color: "#555",
          mb: 4,
          maxWidth: "600px",
        }}
      >
        We’d love to hear from you! Feel free to reach out for any inquiries or collaborations.
      </Typography>

      <Stack spacing={2} sx={{ mb: 3 }}>
        <Typography variant="body1" sx={{ fontSize: "1.1rem" }}>
          📧 Email: keepsandcraftsofficial@gmail.com
        </Typography>
        <Typography variant="body1" sx={{ fontSize: "1.1rem" }}>
          📞 Phone: +63 967 554 4841
        </Typography>
      </Stack>

      <Button
        variant="contained"
        color="primary"
        sx={{
          fontSize: "1.2rem",
          paddingX: 4,
          paddingY: 1.5,
          borderRadius: "8px",
          textTransform: "none",
        }}
      >
        Send a Message
      </Button>
    </Box>
  );
};

export default ContactUs;
