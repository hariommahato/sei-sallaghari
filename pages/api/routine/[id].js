import nextconnect  from 'next-connect'
import dbConnect from '@/backend/config/dbConnect';
import {updateRoutine,deleteRoutine,getRoutineDetails} from '../../../backend/controller/routine'
const handler=nextconnect();
dbConnect();
handler.get(getRoutineDetails).put(updateRoutine).delete(deleteRoutine);

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '10000000mb' // Set desired value here
        }
    }
  }
export default handler;