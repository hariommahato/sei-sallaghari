import nextconnect from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import { createContact, getAllContact } from "../../../backend/controller/contact";

const handler = nextconnect();
dbConnect();
handler.post(createContact).get(getAllContact);

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '1000mb' // Set desired value here
        }
    }
  }
export default handler;
