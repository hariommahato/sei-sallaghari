import mongoose from "mongoose";

const quizSchema = new mongoose.Schema(
  {
    correctAnswer: { type: Number },

    questions: [
      {
        question: { type: String },
        answer: [
          {
            answerText: String,
          },
        ],
      },
    ],
  },
  {
    timestamps: { createdAt: true },
  }
);
export default mongoose.models?.QuizData ||
  mongoose.model("QuizData", quizSchema);
