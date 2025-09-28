import React, { useState, useEffect } from "react";
import Tours from "./Tours";
import Loading from "./Loading";
import { Container, Button, Typography } from "@material-ui/core";

const url = "https://www.course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  function fetchTours() {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setTours(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  useEffect(function () {
    fetchTours();
  }, []);

  function removeTour(id) {
    const newTours = tours.filter(function (tour) {
      return tour.id !== id;
    });
    setTours(newTours);
  }

  if (loading) {
    return <Loading />;
  }

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
