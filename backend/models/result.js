import mongoose from "mongoose";

const resultSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    section: {
      type: String,
    },
    mark: {
      type: Number,
    },
  },
  {
    timestamps: { createdAt: true },
  }
);
export default mongoose.models?.Result ||
  mongoose.model("Result", resultSchema);
