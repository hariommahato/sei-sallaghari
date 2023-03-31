
import nextconnect from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import { getAdminAllQuiz } from '../../../../backend/controller/quiz'

const handler = nextconnect();
dbConnect();
handler.get(getAdminAllQuiz);

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '3000000mb' // Set desired value here
        }
    }
  }
export default handler;
