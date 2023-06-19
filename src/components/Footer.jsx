import insta from '../assets/instaGrey.svg'
import github from '../assets/githubGrey.svg';
import favicon4 from '../assets/ramenGrey.png';

export function Footer() {
    return (
        <footer>
            <div>
                <a href="https://www.instagram.com/medwayramen/" target="_blank" rel="noopener noreferrer">
                    <img src={insta} alt="Instagram Icon" id="instagramIcon" />
                </a>
            </div>
            <div>
                <img src={favicon4} alt="bowl of noodes" id="instagramIcon" />
            </div>
            <div>
                <a href="https://github.com/T-J-D-Cavey" target='blank' rel="noopener noreferrer">
                    <img src={github} alt="github page" id="githubIcon"/>
                </a> 
            </div>
        </footer>
    )
}