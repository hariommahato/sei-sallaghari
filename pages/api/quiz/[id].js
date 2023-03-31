import nextconnect  from 'next-connect'
import dbConnect from '@/backend/config/dbConnect';
import {updateQuiz,deleteQuiz,getQuiz} from '../../../backend/controller/quiz'
const handler=nextconnect();
dbConnect();
handler.get(getQuiz).put(updateQuiz).delete(deleteQuiz);

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '1000mb' // Set desired value here
        }
    }
  }
export default handler;