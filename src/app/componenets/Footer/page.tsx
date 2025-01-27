"use client";

import { Box, Typography, Link, Container } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: "#606C38", color: "white", mt: 8 }}>
      <Container maxWidth="xl" sx={{ py: 4, textAlign: "center" }}>
        <Typography
          sx={{
            fontFamily: "Vazir",
            fontSize: "0.9rem",
            color: "#e0e0e0",
            mb: 1,
          }}
        >
          © 2025 تمامی حقوق مادی و معنوی این سایت متعلق به فروشگاه وین می‌باشد.
        </Typography>
      </Container>
    </Box>
  );
}