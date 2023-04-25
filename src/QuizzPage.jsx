import { useQuizz, startQuiz } from "./redux/quizz";
import Quizz from "./Quizz";
import Result from "./Result";

function QuizzPage() {
  const { showResult, quizzStarted } = useQuizz();

  function renderPart() {
    if (showResult) {
      return <Result />;
    } else if (quizzStarted) {
      return <Quizz />;
    } else {
      return (
        <button
          className="bg-blue-400 text-white rounded text-xl p-2"
          onClick={() => startQuiz()}
        >
          Starta Quiz
        </button>
      );
    }
  }

  return <div className="flex flex-col">{renderPart()}</div>;
}

export default QuizzPage;