import mongoose from "mongoose";

const aboutSchema = new mongoose.Schema({
  images: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  description: {
    type: String,
    required: [true, "Please Enter the Description"],
  }
});
export default mongoose.models?.About ||
  mongoose.model("About", aboutSchema);
