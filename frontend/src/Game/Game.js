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
      activeClassIndex: null,
      activeClass: "",
    };
  }

  componentDidMount() {
    axios.get("http://localhost:8000/api/").then((res) => {
      this.setState({ questions: res.data });
    });
  }

  checkAnswer = (e) => {
    const selectedAnswer = Number(e.target.value);
    const isCorrect =
      this.state.questions[this.state.currentQuestion].correct_answer ===
      selectedAnswer;
    this.setState({
      activeClassIndex: selectedAnswer,
      activeClass: isCorrect ? "correct" : "wrong",
    });
  };

  render() {
    return (
      <div className="game">
        {this.state.questions
          ? this.state.questions.map((question, id) => {
              if (id === this.state.currentQuestion) {
                return (
                  <Fragment key={id}>
                    <div className="question">{question.question}</div>
                    <br />
                    <div className="options" key={id}>
                      {question.options.map((option, id) => {
                        return (
                          <button
                            key={id}
                            className={`option ${
                              this.state.activeClassIndex === id
                                ? `${this.state.activeClass}`
                                : ""
                            }`}
                            value={id}
                            onClick={this.checkAnswer}
                          >
                            {option}
                          </button>
                        );
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
