import nextconnect  from 'next-connect'
import dbConnect from '@/backend/config/dbConnect';
import {updateGallery,deleteGallery,getGalleryDetails} from '../../../backend/controller/gallery'
const handler=nextconnect();
dbConnect();
handler.get(getGalleryDetails).put(updateGallery).delete(deleteGallery);

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '40000000mb' // Set desired value here
        }
    }
  }
export default handler;