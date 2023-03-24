import mongoose from "mongoose";

const questionSchem = new mongoose.Schema(
  {
    questions: { type : Array, default: []}, // create question with [] default value
    answers : { type : Array, default: []},
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);
export default mongoose.models?.Question ||
  mongoose.model("Question", questionSchem);
