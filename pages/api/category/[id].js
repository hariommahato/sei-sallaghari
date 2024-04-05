import nextconnect from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import {
  updateCategory,
  getCategoryDetails,
  deleteCategory
} from "../../../backend/controller/cateogory";
const handler = nextconnect();
dbConnect()
handler.get(getCategoryDetails).put(updateCategory).delete(deleteCategory);
export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10000000mb", // Set desired value here
    },
  },
};
export default handler;
