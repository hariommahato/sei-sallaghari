import nextconnect  from 'next-connect'
import dbConnect from '@/backend/config/dbConnect';
import {updateEnroll,deleteEnroll,getEnrollDetails} from '../../../backend/controller/enroll'
const handler=nextconnect();
dbConnect();
handler.get(getEnrollDetails).put(updateEnroll).delete(deleteEnroll);

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '1000mb' // Set desired value here
        }
    }
  }
export default handler;