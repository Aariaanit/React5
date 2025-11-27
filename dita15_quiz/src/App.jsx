
import React, { useState } from "react"; 
import "./App.css"; 

const questions = [
  {
    question: "Cili lojtar ka fituar më shumë topa të artë?",
    options: ["Cristiano Ronaldo", "Lionel Messi", "Neymar", "Kylian Mbappe"],
    answer: "Lionel Messi",
  },
  {
    question: "Cili është klubi me më shumë tituj të fituar në Angli?",
    options: ["Liverpool", "Manchester United", "Arsenal", "Chelsea"],
    answer: "Manchester United",
  },
  {
    question: "Cili është lojtari që ka shënuar më shumë gola në një sezon të Ligës së Kampionëve?",
    options: ["Cristiano Ronaldo", "Lionel Messi", "Robert Lewandowski", "Raul"],
    answer: "Cristiano Ronaldo",
  },
  {
    question: "Cili lojtar ka shënuar më shumë gola për Kombëtaren e Brazilit?",
    options: ["Pele", "Ronaldo", "Neymar", "Romario"],
    answer: "Neymar",
  },
];

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0); 
  const [score, setScore] = useState(0); 

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore(score + 1); 
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  if (currentQuestion >= questions.length) {
    return (
      <div className="quiz-container">
        <h1>Futboll Quiz</h1>
        <h3>Quiz-i ka përfunduar!</h3>
        <p>Shkalla e saktësisë: {score} nga {questions.length}</p>
      </div>
    );
  }
  return (
    <div className="quiz-container">
      <h1>Futboll Quiz</h1>
      <div>
        <h2>{questions[currentQuestion].question}</h2>
        {questions[currentQuestion].options.map((option, index) => (
          <button key={index} onClick={() => handleAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};
export default App;
