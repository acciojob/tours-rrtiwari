import React, { useState, useEffect } from "react";
import Tours from "./Tours";
import Loading from "./Loading";
import { Container, Button, Typography } from "@material-ui/core";
import toursData from "../data/tours.json";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  function fetchTours() {
    setLoading(true);
    setTimeout(function () {
      setTours(toursData);
      setLoading(false);
    }, 1000); // simulate network delay
  }

  useEffect(function () {
    fetchTours();
  }, []);

  function removeTour(id) {
    setTours(
      tours.filter(function (tour) {
        return tour.id !== id;
      })
    );
  }

  if (loading) return <Loading />;

  if (tours.length === 0) {
    return (
      <Container style={{ textAlign: "center", marginTop: 40 }}>
        <Typography variant="h5" gutterBottom>
          No Tours Left
        </Typography>
        <Button variant="contained" color="primary" onClick={fetchTours}>
          Refresh
        </Button>
      </Container>
    );
  }

  return (
    <Container style={{ marginTop: 40 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Our Tours
      </Typography>
      <Tours tours={tours} removeTour={removeTour} />
    </Container>
  );
}

export default App;

