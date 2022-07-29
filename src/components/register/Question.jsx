import React, { useState } from "react";
import Text from "./Type/Text";
import Radio from "./Type/Radio";
import Email from "./Type/Email";
import Number from "./Type/Number";
// import S from "./Submitted";

function Question() {
  // const sub=()=>{{onsubmit}}
  const questions = [
    {
      questionText: "Let's start with your full name.",
      answer: "text",
    },
    {
      questionText: "What email address can we reach you at?",
      answer: "email",
    },
    {
      questionText: "Which branch are you in?",
      answer: "text",
    },
    {
      questionText: "How did you get to know about this event?",
      answer: "radio",
    },
    {
        questionText: "enter your no.",
        answer: "number",
      },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  function next() {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    }
  }

  function back() {
    const prevQuestion = currentQuestion - 1;
    if (prevQuestion >= 0) {
      setCurrentQuestion(prevQuestion);
    }
  }

  return (
    <div>
      <div className="flex justify-center items-center">
        <div>
          <text className="text-2xl font-bold text-yellow-500">
            {currentQuestion + 1}
            <text className="text-yellow-500">.</text>
          </text>
        </div>

        <div className="ml-6">
          <text className="text-3xl font-bold text-white">
            {questions[currentQuestion].questionText}
          </text>
        </div>
      </div>
      <div
        className="ml-10"
        style={{
          border: "none",
          borderBottom:
            questions[currentQuestion].answer == "radio"
              ? "none"
              : "2px solid white ",
          width: "90%",
          fontSize: "16px",
          padding: "12px 20px 12px 40px",
        }}
      >
        {questions[currentQuestion].answer == "text" && <Text />}
        {questions[currentQuestion].answer == "email" && <Email />}
        {questions[currentQuestion].answer == "radio" && <Radio />}
        {questions[currentQuestion].answer == "number" && <Number />}
      </div>

      <div className="flex justify-center items-center m-10 ">
        <button
          className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500  font-medium rounded-lg text-sm px-5 py-2.5 mr-5 mb-2  "
          onClick={back}
        >
          Back
        </button>

        {currentQuestion + 1 == questions.length ? (
          <div>
            <button
              className="focus:outline-none  text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-5 mb-2 dark:bg-green-600 dark:hover:bg-green-700 "
              onClick={onsubmit}
            >
              Submit
            </button>
            {/* <text className="text-5xl text-white">SUBMITTED SUCCESSFULLY!!</text> */}
          </div>
        ) : (
          <button
            className="focus:outline-none  text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 "
            onClick={next}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default Question;
