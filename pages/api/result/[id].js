import nextconnect  from 'next-connect'
import dbConnect from '@/backend/config/dbConnect';
import {updateResult,deleteResult,getResultDetails} from '../../../backend/controller/result'
const handler=nextconnect();
dbConnect();
handler.get(getResultDetails).put(updateResult).delete(deleteResult);

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '10000000mb' // Set desired value here
        }
    }
  }
export default handler;