import nextconnect from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import { createResult, getAllResult } from "../../../backend/controller/result";

const handler = nextconnect();
dbConnect();
handler.post(createResult).get(getAllResult);

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '100000mb' // Set desired value here
        }
    }
  }
export default handler;
