import nextconnect from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import { createCategory, getAllCategory } from "../../../backend/controller/cateogory";

const handler = nextconnect();
dbConnect();
handler.post(createCategory).get(getAllCategory);

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '1000mb' // Set desired value here
        }
    }
  }
export default handler;
