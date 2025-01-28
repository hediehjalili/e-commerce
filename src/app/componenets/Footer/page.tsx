"use client";

import React, { JSX } from "react";
import { Box, Typography, IconButton, Link, Container } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import Image from "next/image";

const ContactInfoWithFooter: React.FC = (): JSX.Element => {
  return (
    <Box>
      {/* Contact Info Section */}
      <Box
        sx={{
          backgroundColor: "#556b2f", // Background color
          color: "white",
          py: 4,
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between", // Place all items in one line
            flexWrap: "wrap", // Wrap items on smaller screens
            gap: 2,
          }}
        >
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Image src="/logo.svg" alt="Logo" width={150} height={50} />
          </Box>

          {/* Samandehi Image */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Image
              src="/images/samandehi.png"
              alt="Footer Image"
              width={100}
              height={100}
            />
          </Box>

          {/* Contact Info */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <PhoneIcon fontSize="medium" sx={{ color: "white" }} />
            <Box>
              <Typography
                variant="h6"
                sx={{
                  color: "#fff",
                  fontFamily: "Vazir",
                  textAlign: "center",
                }}
              >
                با ما در تماس باشید
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "Vazir",
                  textAlign: "center",
                  fontSize: "0.9rem",
                }}
              >
                1245541+ | 3456662+
              </Typography>
            </Box>
          </Box>

          {/* Email */}
          <Box>
            <Typography
              variant="h6"
              sx={{
                color: "#fff",
                fontFamily: "Vazir",
                textAlign: "center",
              }}
            >
              اطلاعات تماس
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "Vazir",
                textAlign: "center",
                fontSize: "0.9rem",
              }}
            >
              info@winstore.com
            </Typography>
          </Box>

          {/* Social Media Icons */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Link href="#" sx={{ color: "white" }}>
              <IconButton>
                <FacebookIcon fontSize="large" sx={{ color: "white" }} />
              </IconButton>
            </Link>
            <Link href="#" sx={{ color: "white" }}>
              <IconButton>
                <TwitterIcon fontSize="large" sx={{ color: "white" }} />
              </IconButton>
            </Link>
            <Link href="#" sx={{ color: "white" }}>
              <IconButton>
                <LinkedInIcon fontSize="large" sx={{ color: "white" }} />
              </IconButton>
            </Link>
            <Link href="#" sx={{ color: "white" }}>
              <IconButton>
                <InstagramIcon fontSize="large" sx={{ color: "white" }} />
              </IconButton>
            </Link>
          </Box>
        </Container>
      </Box>

      {/* Footer Section */}
      <Box
        sx={{
          backgroundColor: "#BC6C25", // Brown background color
          color: "white",
          py: 2,
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Vazir",
            fontSize: "0.9rem",
            color: "#fff",
          }}
        >
          © 2025 تمامی حقوق مادی و معنوی این سایت متعلق به فروشگاه وین می‌باشد.
        </Typography>
      </Box>
    </Box>
  );
};

export default ContactInfoWithFooter;