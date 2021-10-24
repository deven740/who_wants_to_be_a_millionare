import React, { Component } from "react";
import axios from "axios";
import Questions from "../Questions/Questions";

export default class Quiz extends Component {
  static defaultProps = {
    num_questions: 10,
  };

  constructor(props) {
    super(props);
    this.state = { questions: [], current_question: 0 };
  }

  async componentDidMount() {
    let res = await axios.get("http://localhost:8000/api/");
    this.setState({ questions: res.data });
  }

  checkAnswer = (selected_option) => {
    Number(selected_option) ===
    this.state.questions[this.state.current_question]["correct_answer"]
      ? this.setState((prevState) => ({
          ...prevState.questions,
          current_question: prevState.current_question + 1,
        }))
      : window.alert("answer is wrong");
  };

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
    );
  }
}
