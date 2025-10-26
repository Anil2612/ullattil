import { Box, Typography, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import "./Footer.scss";

export default function Footer() {
  return (
    <Box className="footer">
      <Box className="footer-content">
        <Typography variant="h6" className="footer-logo">
          Ullattil
        </Typography>

        <Box className="socials">
          <IconButton href="#" target="_blank" rel="noopener noreferrer">
            <FacebookIcon />
          </IconButton>
          <IconButton href="#" target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
          </IconButton>
          <IconButton href="#" target="_blank" rel="noopener noreferrer">
            <TwitterIcon />
          </IconButton>
        </Box>

        <Typography variant="body2" className="footer-text">
          © 2025 Ullattil. All Rights Reserved.
        </Typography>
      </Box>

      {/* Animated fireflies in footer */}
      <Box className="footer-fireflies">
        <span className="dot dot1" />
        <span className="dot dot2" />
        <span className="dot dot3" />
      </Box>
    </Box>
  );
}
