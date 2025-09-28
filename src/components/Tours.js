import React from "react";
import Tour from "./Tour";
import { Grid } from "@material-ui/core";

function Tours(props) {
  return (
    <Grid container spacing={3}>
      {props.tours.map(function (tour) {
        return (
          <Grid item xs={12} md={6} lg={4} key={tour.id}>
            <Tour
              id={tour.id}
              image={tour.image}
              info={tour.info}
              name={tour.name}
              price={tour.price}
              removeTour={props.removeTour}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Tours;

