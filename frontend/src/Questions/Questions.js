import React, { Component } from "react";
import { Button, Grid, Paper } from "@mui/material";
import axios from "axios";

export default class Questions extends Component {
  static defaultProps = {
    num_questions: 10,
  };

  constructor(props) {
    super(props);
    this.state = { questions: [] };
  }

  async componentDidMount() {
    let res = await axios.get("http://localhost:8000/api/");
    console.log(res.data);
  }

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
              elevation={0}
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
              elevation={0}
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
              elevation={0}
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
              elevation={0}
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
              elevation={0}
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
