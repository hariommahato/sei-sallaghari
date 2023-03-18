
import mongoose from "mongoose";
const dbConnect = async () => {
  mongoose.set(`strictQuery`, false);
  if (!mongoose.connection.readyState) {
    try {
      await mongoose.connect(process.env.NEXT_MONGODB_URL);
    } catch (error) {
      console.log(error);
    }
  }
};

export default dbConnect;