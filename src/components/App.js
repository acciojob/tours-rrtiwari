import React, { useState, useEffect } from "react";
import { Container, Button, Typography } from "@material-ui/core";
import Tours from "./Tours";
import Loading from "./Loading";
import toursData from "../data/tours.json";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  function fetchTours() {
    setLoading(true);
    setTimeout(function () {
      setTours(toursData);
      setLoading(false);
    }, 600); // small simulated delay
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

  function refresh() {
    setTours(toursData);
  }

  return (
    <div id="main">
      {loading ? (
        <Loading />
      ) : tours.length === 0 ? (
        <Container style={{ textAlign: "center", marginTop: 40 }}>
          <Typography variant="h5" gutterBottom>
            No Tours Left
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={refresh}
            id="refresh"
          >
            Refresh
          </Button>
        </Container>
      ) : (
        <Container style={{ marginTop: 40 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Our Tours
          </Typography>
          <Tours tours={tours} removeTour={removeTour} />
        </Container>
      )}
    </div>
  );
}

export default App;
