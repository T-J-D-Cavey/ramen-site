import chef from '../assets/chef.jpg'

export function Description() {
    return (
        <div className='flexContainerBigBackground'>
        <div className='flexItemBackground descriptionContainer'>
            <h2>Who:</h2>
            <img src={chef} alt='chef' id='chefPhoto' />
            <p id='long'>
            Miura Anjin's pop-up ramen kitchen offers an unforgettable experience of authentic Japanese ramen.  
            Indulge in flavorful ramen bowls crafted with care, 
            featuring handmade noodles that provide a delightful texture. 
            <br />
            <br />
            Miura's commitment to excellence is reflected in their use of the finest ingredients sourced directly from Japan. 
            Explore that day's delectable broth and savor the rich umami flavors that will transport you to the bustling streets of Tokyo. 
            <br />
            <br />
            Join us at Miura Anjin's pop-up ramen kitchen and embark on a culinary journey that captures the essence of traditional ramen.
            </p>
        </div>
    </div>
    )
}