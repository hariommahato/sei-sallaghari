import nextconnect from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import {
  createGallery,
  getAllGallery,
} from "../../../backend/controller/gallery";

const handler = nextconnect();
dbConnect();
handler.post(createGallery).get(getAllGallery);

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "5000000000mb", // Set desired value here
    },
  },
};
export default handler;
