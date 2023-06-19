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
      <div className='backgroundPicture' id='pictureOne'>
        <ChefName />
      </div>
      <div className='backgroundPicture' id='pictureTwo'>
        <Description />
      </div>
      <div className='backgroundPicture' id='pictureThree'>
        <Date />
      </div>
      <div className='backgroundPicture' id='pictureFour'>
        <Location />
      </div>
      <Footer />
    </div>
  )
}