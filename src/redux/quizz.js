import { createReduxModule } from "hooks-for-redux";

const initialState = {
  quizzStarted: false,
  showResult: false,
  currentIndex: 0,
  score: 0,
  questions: [
    {
      title: "Vilken är världens största kontinent?",
      alt1: "Nord Amerika",
      alt2: "Afrika",
      alt3: "Asien",
      correctAnswer: 3,
      id: 1,
    },
    {
      title: "Vilka två länder är världens folkrikaste länder?",
      alt1: "Usa & Indien",
      alt2: "Ryssland & Usa",
      alt3: "Indien & Kina",
      correctAnswer: 3,
      id: 2,
    },
  ],
};

export const [
  useQuizz,
  { addQuest, updateQuest, deleteQuest, startQuiz, answerQuestion },
] = createReduxModule("quizz", initialState, {
  addQuest: (state, question) => {
    return {
      ...state,
      questions: [...state.questions, question],
    };
  },

  updateQuest: (state, question) => {
    const newQuestions = state.questions.map((q) => {
      if (q.id == question.id) {
        return question;
      }
      return q;
    });

    console.log(newQuestions);

    return {
      ...state,
      questions: newQuestions,
    };
  },

  deleteQuest: (state, id) => {
    return {
      ...state,
      questions: state.questions.filter((question) => question.id !== id),
    };
  },

  startQuiz: (state) => {
    return {
      ...state,
      quizzStarted: true,
    };
  },

  answerQuestion: (state, alt) => {
    const question = state.questions[state.currentIndex];
    let score = state.score;
    let currentIndex = state.currentIndex;
    let showResult = state.showResult;

    let correctAnswer = question.correctAnswer == alt;
    if (correctAnswer) {
      score += 1;
    }

    if (currentIndex != state.questions.length - 1) {
      currentIndex++;
    } else {
      showResult = true;
    }

    return {
      ...state,
      score,
      currentIndex,
      showResult,
    };
  },
});