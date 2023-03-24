import nextconnect  from 'next-connect'
import dbConnect from '@/backend/config/dbConnect';
import {updateCarousel,deleteCarousel,getCarouselDetails} from '../../../backend/controller/homecarousel'
const handler=nextconnect();
dbConnect();
handler.get(getCarouselDetails).put(updateCarousel).delete(deleteCarousel);

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '1000mb' // Set desired value here
        }
    }
  }
export default handler;