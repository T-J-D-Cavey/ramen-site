import {ChefName} from './components/ChefName';
import {Date} from './components/Date';
import {Location} from './components/Location';
import {Description} from './components/Description';
import {Footer} from './components/Footer';
import { useGeographic } from 'ol/proj';
import './App.css'

export default function App() {

  useGeographic()


  window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    
    const animatedElements = [
      { element: document.getElementById('dateID'), triggerPosition: 1000 },
      { element: document.getElementById('whereID'), triggerPosition: 1800 }
    ];
    
    animatedElements.forEach(function(item) {
      const { element, triggerPosition } = item;
      
      if (scrollPosition >= triggerPosition) {
        element.classList.add('rotateOnScroll');
      } else {
        element.classList.remove('rotateOnScroll');
      }
    });
  });

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