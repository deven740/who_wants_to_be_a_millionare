import React, { Component } from "react";
import { Button, Grid, Paper } from "@mui/material";
import axios from "axios";

export default class Questions extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.question);
  }

  handleClick = (evt) => {
    // option_id = evt.target.value;
    this.props.checkAnswer(evt.target.value);
    // console.log(evt.target.value);
  };

  render() {
    return (
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
            {this.props.question}
          </Paper>
        </Grid>
        {this.props.options.map((option, id) => (
          <Grid item xs={6}>
            <Button
              onClick={this.handleClick}
              value={id}
              style={{
                background: "linear-gradient(#0e0124, #22074d)",
                color: "white",
              }}
            >
              {option}
            </Button>
          </Grid>
        ))}
      </Grid>
    );
  }
}
