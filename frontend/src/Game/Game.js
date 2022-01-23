import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import "./Game.css";

export default class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: [],
    };
  }

  componentDidMount() {
    const res = axios.get("http://localhost:8000/api/").then((res) => {
      console.log(res);
      this.setState({ questions: res.data });
    });
  }

  render() {
    return (
      <div className="game">
        <div className="question">Who wants to be a millionare ?</div>
        <br />
        <div className="options">
          <div className="option">A</div>
          <div className="option">B</div>
          <div className="option">C</div>
          <div className="option">D</div>
        </div>
      </div>
    );
  }
}
