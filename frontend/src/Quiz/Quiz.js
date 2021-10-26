import React, { Component } from "react";
import axios from "axios";
import { Backdrop } from "@mui/material";

import Questions from "../Questions/Questions";

export default class Quiz extends Component {
  static defaultProps = {
    num_questions: 10,
  };

  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      current_question: 0,
      game_over: false,
      overlay: false,
    };
  }

  async componentDidMount() {
    let res = await axios.get("http://localhost:8000/api/");
    this.setState({ questions: res.data });
  }

  async componentDidUpdate() {
    if (this.state.game_over) {
      console.log("you lost");
      let res = await axios.get("http://localhost:8000/api/");
      this.setState({
        questions: res.data,
        current_question: 0,
        game_over: false,
      });
    }
  }

  checkAnswer = (selected_option) => {
    Number(selected_option) ===
    this.state.questions[this.state.current_question]["correct_answer"]
      ? this.setState((prevState) => ({
          ...prevState.questions,
          current_question: prevState.current_question + 1,
        }))
      : this.setState({ overlay: true });
  };

  startGame = () => {
    this.setState({ game_over: true, overlay: false });
  };

  render() {
    return (
      <div>
        {this.state.overlay ? (
          <div>
            <Backdrop
              sx={{
                color: "#1d3664",
                zIndex: (theme) => theme.zIndex.drawer + 1,
              }}
              open={true}
              onClick={this.startGame}
            />
            <h1>{`You lost, you won ${
              this.state.current_question * 1000
            }RS click here to play again`}</h1>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              textAlign: "center",
              width: "80%",
              margin: "100px",
            }}
          >
            {this.state.questions.map((question, id) =>
              id === this.state.current_question ? (
                <Questions
                  question={question.question}
                  options={question.options}
                  checkAnswer={this.checkAnswer}
                />
              ) : null
            )}
          </div>
        )}
      </div>
    );
  }
}
