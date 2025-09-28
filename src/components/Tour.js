import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@material-ui/core";

function Tour(props) {
  const [readMore, setReadMore] = useState(false);

  function toggleReadMore() {
    setReadMore(!readMore);
  }

  function handleRemove() {
    props.removeTour(props.id);
  }

  return (
    <Card style={{ borderRadius: 12, boxShadow: "0 3px 6px rgba(0,0,0,0.2)" }}>
      <CardMedia
        component="img"
        height="200"
        image={props.image}
        alt={props.name}
      />
      <CardContent>
        <Box display="flex" justifyContent="space-between" marginBottom={2}>
          <Typography variant="h6" style={{ fontWeight: "bold" }}>
            {props.name}
          </Typography>
          <Typography
            variant="h6"
            color="primary"
            style={{ fontWeight: "bold" }}
          >
            ${props.price}
          </Typography>
        </Box>
        <Typography variant="body2" color="textSecondary">
          {readMore ? props.info : props.info.substring(0, 200) + "..."}
          <Button
            size="small"
            onClick={toggleReadMore}
            style={{ textTransform: "none", marginLeft: 8 }}
          >
            {readMore ? "See Less" : "Show More"}
          </Button>
        </Typography>
        <Button
          variant="outlined"
          color="secondary"
          fullWidth
          style={{ marginTop: 12 }}
          onClick={handleRemove}
        >
          Remove
        </Button>
      </CardContent>
    </Card>
  );
}

export default Tour;
