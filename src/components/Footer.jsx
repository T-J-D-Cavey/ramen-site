import insta from '../assets/insta.svg'

export function Footer() {
    return (
        <footer>
            <div>
                <a href="https://www.instagram.com/medwayramen/" target="_blank" rel="noopener noreferrer">
                    <img src={insta} alt="Instagram Icon" className="instagramIcon" />
                </a>
            </div>
        </footer>
    )
}