import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "Please Enter Firstname"],
    },
    lastname: {
      type: String,
      required: [true, "Please Enter Lastname"],
    },
    email: {
      type: String,
      required: [true, "Please Enter Email"],
    },
    number: {
      type: Number,
      required: [true, "Please Enter Contact Number"],
    },
    message: {
      type: String,
      required: [true, "Please Enter Message"],
    },
  },
  { timestamps: true }
);
export default mongoose.models?.Contact ||
  mongoose.model("Contact", contactSchema);
