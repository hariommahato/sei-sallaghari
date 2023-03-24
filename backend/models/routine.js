import mongoose from "mongoose";

const routineSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    subject: [
      {
        subjectname: String,
      },
    ],
    teacher: [
      {
        teachername: String,
      },
    ],
    schedule: [
      {
        time: String,
      },
    ],
  },
  { timestamps: true } 
);
export default mongoose.models?.Routine ||
  mongoose.model("Routine", routineSchema);
