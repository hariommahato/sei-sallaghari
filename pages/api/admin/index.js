import nextconnect from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import { getUsers } from "../../../backend/controller/adminController";

const handler = nextconnect();
dbConnect();
handler.get(getUsers);

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '1000000mb' // Set desired value here
        }
    }
  }
export default handler;
