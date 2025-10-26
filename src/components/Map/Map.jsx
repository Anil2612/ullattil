import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import RoomIcon from "@mui/icons-material/Room";
import "./Map.scss";

export default function Map() {
  const directionsUrl = "https://maps.app.goo.gl/ubx3nVnRCUEL4jJK6";

  return (
    <Box className="map-wrapper">
      <Card className="map-card" elevation={3}>
        <CardContent>
          <Typography variant="h5" className="map-title">
            Visit Ullattil
          </Typography>
          <Typography variant="body2" className="map-desc">
            Nestled amidst serene greenery, Ullattil stands as a timeless home —
            a retreat and the headquarters for our family’s future ventures.
          </Typography>

          <Box className="map-iframe">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15729.612937583517!2d76.5323552!3d10.7498133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba86d6e1e08a6cd%3A0x3e91844cb0d10e13!2sUllattil!5e0!3m2!1sen!2sin!4v1730157000000!5m2!1sen!2sin"
              title="Ullattil Location"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>

          <Button
            variant="contained"
            color="primary"
            startIcon={<RoomIcon />}
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="map-btn"
          >
            Get Directions
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
