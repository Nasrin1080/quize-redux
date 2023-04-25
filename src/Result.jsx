import { useQuizz } from "./redux/quizz";

function Result() {
  const { score, questions } = useQuizz();

  return (
    <div>
      <p>
        Number of correct answers: {score} / {questions.length}
      </p>
    </div>
  );
}

export default Result;