import React, { Component } from "react";
import { Button, Grid, Paper } from "@mui/material";

export default class Questions extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          textAlign: "center",
          width: "80%",
          margin: "100px",
        }}
      >
        {/* <Button variant="contained">Hello World</Button> */}
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12}>
            <Paper
              variant="outlined"
              elevation={3}
              style={{
                background: "linear-gradient(#100241, black)",
                color: "white",
                padding: "20px",
                border: "2px solid white",
                margin: "10px",
              }}
            >
              a sentence worded or expressed so as to elicit information.a
              sentence worded or expressed so as to elicit information.a
              sentence worded or expressed so as to elicit information.a
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper
              variant="outlined"
              elevation={3}
              style={{
                background: "linear-gradient(#0e0124, #22074d)",
                color: "white",
              }}
            >
              Option 1
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper
              variant="outlined"
              elevation={3}
              style={{
                background: "linear-gradient(#0e0124, #22074d)",
                color: "white",
              }}
            >
              Option 2
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper
              variant="outlined"
              elevation={3}
              style={{
                background: "linear-gradient(#0e0124, #22074d)",
                color: "white",
              }}
            >
              Option 3
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper
              variant="outlined"
              elevation={3}
              style={{
                background: "linear-gradient(#0e0124, #22074d)",
                color: "white",
              }}
            >
              Option 4
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}
