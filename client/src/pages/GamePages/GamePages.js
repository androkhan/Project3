import React from "react";
import GameContainer from "./../components/GameComponents/GameContainer"
import "./style.css"




function GamePages() {
  const questions = [
    {
        "id": 1,
        "question": "What is a method?",
        "correctAnswer": "A",
        "randomAnswers": ["A,B,C,D"],
        "language": "Javascript",
        "difficulty": "Easy",
        "points": 100
    },
    {
        "id": 2,
        "question": "Question 2",
        "correctAnswer": "C",
        "randomAnswers": "A,B,C,D",
        "language": "Node",
        "difficulty": "Easy",
        "points": 100
    },
    {
        "id": 3,
        "question": "Question 3",
        "correctAnswer": "D",
        "randomAnswers": "A,B,C,D",
        "language": "Javascript",
        "difficulty": "Easy",
        "points": 100
    },
    {
        "id": 4,
        "question": "Question 4",
        "correctAnswer": "A",
        "randomAnswers": "A,B,C,D",
        "language": "HTML",
        "difficulty": "Easy",
        "points": 100
    },
    {
        "id": 5,
        "question": "Question 5",
        "correctAnswer": "D",
        "randomAnswers": "A,B,C,D",
        "language": "CSS",
        "difficulty": "Easy",
        "points": 100
    },
    {
        "id": 6,
        "question": "Question 6",
        "correctAnswer": "C",
        "randomAnswers": "A,B,C,D",
        "language": "Javascript",
        "difficulty": "Medium",
        "points": 200
    },
    {
        "id": 7,
        "question": "Question 7",
        "correctAnswer": "C",
        "randomAnswers": "A,B,C,D",
        "language": "CSS",
        "difficulty": "Medium",
        "points": 200
    },
    {
        "id": 8,
        "question": "Question 8",
        "correctAnswer": "A",
        "randomAnswers": "A,B,C,D",
        "language": "Javascript",
        "difficulty": "Medium",
        "points": 200
    },
    {
        "id": 9,
        "question": "Question 9",
        "correctAnswer": "A",
        "randomAnswers": "A,B,C,D",
        "language": "Javascript",
        "difficulty": "Medium",
        "points": 200
    },
    {
        "id": 10,
        "question": "Question 10",
        "correctAnswer": "A",
        "randomAnswers": "A,B,C,D",
        "language": "CSS",
        "difficulty": "Easy",
        "points": 100
    },
    {
        "id": 11,
        "question": "Question 11",
        "correctAnswer": "A",
        "randomAnswers": "A,B,C,D",
        "language": "Javascript",
        "difficulty": "Hard",
        "points": 300
    },
    {
        "id": 12,
        "question": "Question 12",
        "correctAnswer": "D",
        "randomAnswers": "A,B,C,D",
        "language": "MySQL",
        "difficulty": "Hard",
        "points": 300
    },
    {
        "id": 13,
        "question": "Question 13",
        "correctAnswer": "B",
        "randomAnswers": "A,B,C,D",
        "language": "Javascript",
        "difficulty": "Medium",
        "points": 300
    },
    {
        "id": 14,
        "question": "Question 14",
        "correctAnswer": "D",
        "randomAnswers": "A,B,C,D",
        "language": "Javascript",
        "difficulty": "Hard",
        "points": 300
    },
    {
        "id": 15,
        "question": "Question 15",
        "correctAnswer": "A",
        "randomAnswers": "A,B,C,D",
        "language": "Javascript",
        "difficulty": "Hard",
        "points": 300
    },
    {
        "id": 16,
        "question": "Question 16",
        "correctAnswer": "A",
        "randomAnswers": "A,B,C,D",
        "language": "HTML",
        "difficulty": "Hard",
        "points": 300
    },
    {
        "id": 17,
        "question": "Question 17",
        "correctAnswer": "C",
        "randomAnswers": "A,B,C,D",
        "language": "Node",
        "difficulty": "Medium",
        "points": 200
    },
    {
        "id": 18,
        "question": "Question 18",
        "correctAnswer": "A",
        "randomAnswers": "A,B,C,D",
        "language": "Javascript",
        "difficulty": "Easy",
        "points": 100
    },
    {
        "id": 19,
        "question": "Question 19",
        "correctAnswer": "C",
        "randomAnswers": "A,B,C,D",
        "language": "Bootstrap",
        "difficulty": "Medium",
        "points": 100
    },
    {
        "id": 20,
        "question": "Question 20",
        "correctAnswer": "B",
        "randomAnswers": "A,B,C,D",
        "language": "Node",
        "difficulty": "Hard",
        "points": 300
    }
];

const question = questions[0];
  return (
    <div className="container">
     
      <GameContainer  total ="20" current="1"
                      question = {question.question}
                      letter="A" answer="Hyper Text Markup Language"
                       />

    </div>
  );
}

export default GamePages;