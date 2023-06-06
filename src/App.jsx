import {ChefName} from './components/ChefName';
import {Date} from './components/Date';
import {Location} from './components/Location';
import {Footer} from './components/Footer';
import './App.css'

export default function App() {

  return (
    <>
      <div className='backgroundPictureOne'>
        <ChefName />
        <Date />
      </div>
      <div className='backgroundPictureTwo'>
        <Location />
        <Footer />
      </div>
    </>
  )
}