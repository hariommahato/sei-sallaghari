import nextconnect from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import { createRoutine, getAllRoutine } from "../../../backend/controller/routine";

const handler = nextconnect();
dbConnect();
handler.post(createRoutine).get(getAllRoutine);

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '10000000mb' // Set desired value here
        }
    }
  }
export default handler;
