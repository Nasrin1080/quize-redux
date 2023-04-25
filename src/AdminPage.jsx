import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { addQuest, useQuizz } from "./redux/quizz";
import UpdateQuest from "./UpdateQuest";

function App() {
  const quizzObject = useQuizz();
  const [title, setTitle] = useState();
  const [alt1, setAlt1] = useState();
  const [alt2, setAlt2] = useState();
  const [alt3, setAlt3] = useState();
  const [correctAnswer, setCorrectAnswer] = useState();

  function handleAdd() {
    const quizz = {
      title: title,
      alt1: alt1,
      alt2: alt2,
      alt3: alt3,
      correctAnswer: correctAnswer,
      id: Date.now(),
    };

    addQuest(quizz);
  }

  return (
    <div className="">
      <input
        className="border border-black"
        type="text"
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        className="border border-black"
        type="text"
        onChange={(event) => setAlt1(event.target.value)}
      />
      <input
        className="border border-black"
        type="text"
        onChange={(event) => setAlt2(event.target.value)}
      />
      <input
        className="border border-black"
        type="text"
        onChange={(event) => setAlt3(event.target.value)}
      />
      <input
        className="border border-black"
        type="text"
        onChange={(event) => setCorrectAnswer(event.target.value)}
      />
      <button
        className="bg-sky-300 text-white rounded text-xl p-2"
        onClick={handleAdd}
      >
        Add
      </button>

      {quizzObject.questions.map((question) => {
        return <UpdateQuest question={question} />;
      })}
    </div>
  );
}

export default App;