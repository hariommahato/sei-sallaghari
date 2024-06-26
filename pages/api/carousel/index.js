import nextconnect from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import {
  createHomeCarousel,
  getAllCarousel,
} from "../../../backend/controller/homecarousel";

const handler = nextconnect();
dbConnect();
handler.post(createHomeCarousel).get(getAllCarousel);

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "5000000000mb", // Set desired value here
    },
  },
};
export default handler;
