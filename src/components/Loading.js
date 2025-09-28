import React from "react";
import { CircularProgress, Typography, Box } from "@material-ui/core";

function Loading() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <CircularProgress size={60} />
      <Typography variant="h6" style={{ marginTop: 16 }}>
        Loading...
      </Typography>
    </Box>
  );
}

export default Loading;

