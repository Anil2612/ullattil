import { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppBar className={`header ${scrolled ? "scrolled" : ""}`} elevation={0} sx={{ backgroundColor: 'rgba(27, 61, 27, 0.6)' }}>
      <Toolbar className="toolbar">
        <Typography variant="h6" className="logo">Ullattil</Typography>
        {/* <nav className="nav">
          <Button component={Link} to="/">Home</Button>
          <Button component={Link} to="/about">About</Button>
          <Button component={Link} to="/ventures">Ventures</Button>
          <Button component={Link} to="/gallery">Gallery</Button>
          <Button component={Link} to="/contact">Contact</Button>
        </nav> */}

        {/* Optional small fireflies in header */}
        <div className="header-fireflies">
          <span className="dot dot1" />
          <span className="dot dot2" />
          <span className="dot dot3" />
        </div>
      </Toolbar>
    </AppBar>
  );
}
