import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import "./Game.css";

export default class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: [],
      currentQuestion: 0,
    };
  }

  componentDidMount() {
    axios.get("http://localhost:8000/api/").then((res) => {
      this.setState({ questions: res.data });
    });
  }

  render() {
    return (
      <div className="game">
        {this.state.questions
          ? this.state.questions.map((question, id) => {
              if (id === this.state.currentQuestion) {
                return (
                  <Fragment>
                    <div className="question">{question.question}</div>
                    <br />
                    <div className="options">
                      {question.options.map((option) => {
                        return <div className="option">{option}</div>;
                      })}
                    </div>
                  </Fragment>
                );
              }
            })
          : null}
      </div>
    );
  }
}
