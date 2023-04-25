import { useQuizz, answerQuestion } from "./redux/quizz";

function Quizz() {
  const { questions, currentIndex } = useQuizz();
  const currentQuestion = questions[currentIndex];

  return (
    <div className="flex flex-col space-y-4 ">
      {currentQuestion.title}
      <button
        className="bg-sky-300 text-white rounded text-xl p-2"
        onClick={answerQuestion}
      >
        {currentQuestion.alt1}
      </button>
      <button
        className="bg-sky-300 text-white rounded text-xl p-2"
        onClick={answerQuestion}
      >
        {currentQuestion.alt2}
      </button>
      <button
        className="bg-sky-300 text-white rounded text-xl p-2"
        onClick={answerQuestion}
      >
        {currentQuestion.alt3}
      </button>
    </div>
  );
}

export default Quizz;