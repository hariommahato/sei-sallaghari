import nextconnect from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import { createEnroll, getAllEnroll } from "../../../backend/controller/enroll";

const handler = nextconnect();
dbConnect();
handler.post(createEnroll).get(getAllEnroll);

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '1000mb' // Set desired value here
        }
    }
  }
export default handler;
