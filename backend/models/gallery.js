import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema({
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
});
export default mongoose.models?.Gallery ||
  mongoose.model("Gallery", gallerySchema);
