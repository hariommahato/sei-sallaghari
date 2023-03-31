
import nextconnect from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import {createQuiz, getQuizes } from "../../../backend/controller/quiz";

const handler = nextconnect();
dbConnect();
handler.post(createQuiz).get(getQuizes);

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '3000000mb' // Set desired value here
        }
    }
  }
export default handler;
