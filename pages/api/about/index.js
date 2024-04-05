import nextconnect from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import { createAbout, getAllAbout } from "../../../backend/controller/about";

const handler = nextconnect();
dbConnect();
handler.post(createAbout).get(getAllAbout);

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '10000000mb' // Set desired value here
        }
    }
  }
export default handler;
