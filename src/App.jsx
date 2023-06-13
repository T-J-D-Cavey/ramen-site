import {ChefName} from './components/ChefName';
import {Date} from './components/Date';
import {Location} from './components/Location';
import {Description} from './components/Description';
import {Footer} from './components/Footer';
import { useGeographic } from 'ol/proj';
import './App.css'

export default function App() {

  useGeographic()

  return (
    <div className='rootContainer'>
      <div className='backgroundPicture pictureOne'>
        <ChefName />
      </div>
      <div className='backgroundPicture pictureTwo'>
        <Date />
      </div>
      <div className='backgroundPicture pictureThree'>
        <Description />
      </div>
      <div className='backgroundPicture pictureFour'>
        <Location />
      </div>
      <Footer />
    </div>
  )
}