import nextconnect  from 'next-connect'
import dbConnect from '@/backend/config/dbConnect';
import {updateContact,deleteContact,getContactDetails} from '../../../backend/controller/contact'
const handler=nextconnect();
dbConnect();
handler.get(getContactDetails).put(updateContact).delete(deleteContact);

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '10000000mb' // Set desired value here
        }
    }
  }
export default handler;