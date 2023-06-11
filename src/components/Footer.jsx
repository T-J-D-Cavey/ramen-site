import insta from '../assets/insta.svg'
import github from '../assets/githubIcon2.svg';

export function Footer() {
    return (
        <footer>
            <div>
                <a href="https://www.instagram.com/medwayramen/" target="_blank" rel="noopener noreferrer">
                    <img src={insta} alt="Instagram Icon" id="instagramIcon" />
                </a>
            </div>
            <div>
                <a href="https://github.com/T-J-D-Cavey" target='blank' rel="noopener noreferrer">
                    <img src={github} alt="github page" id="githubIcon"/>
                </a> 
            </div>
        </footer>
    )
}