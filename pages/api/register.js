import dbConnect from "@/backend/config/dbConnect";
import { registerUser } from "../../backend/controller/user";
import nextConnect from "next-connect";

const handler = nextConnect();
dbConnect();
handler.post(registerUser);
export default handler;
