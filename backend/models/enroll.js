import mongoose from "mongoose";

const enrollSchema = new mongoose.Schema(
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
    school: {
      type: String,
      required: [true, "Please Enter School/College Name"],
    },
    course: {
      type: String,
      required: [true, "Please Enter Course Name"],
    },
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
  },
  { timestamps: true }
);
export default mongoose.models?.Enroll ||
  mongoose.model("Enroll", enrollSchema);
