import React, { useState, useEffect } from 'react'

function Quiz() {
    const [questions, setQuestions] = useState();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);

    useEffect(() => {
        fetch('http://localhost:3000/quiz')
            .then(
                (response) => response.json()
            )
            .then(
                (data) => setQuestions(data)
            );
    }, []);
    if (!questions) {
        return <div>Loading...</div>;
    }
    const handleAnswer = (selectedAnswer) => {
        if (selectedAnswer === questions[currentQuestion].answer) {
            setScore(score + 1);
        }
        setCurrentQuestion(currentQuestion + 1);
    };
    if (currentQuestion >= questions.length) {
        return (
            <div className="quiz-container">
                <h1>React Quiz</h1>
                <h3>Quiz-i ka përfunduar!</h3>
                <p>Shkalla e saktësisë: {score} nga {questions.length}</p>
            </div>
        );
    }


  return (
    <>
        <div className="quiz-container">
            <h1>React Quiz</h1>
            <div>
                <h2>{questions[currentQuestion].question}</h2>
                {questions[currentQuestion].options.map((option, index) => (
                    <button key={index} onClick={() => handleAnswer(option)}>
                        {option}
                    </button>
                ))}
            </div>

        </div>
       


    </>
  )
}

export default Quiz