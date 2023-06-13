import {MapWidget} from './MapWidget';

export function Location() {
    return (
        <div className='flexContainerBackground column'>
            <div className='flexItemBackground whereContainer'>
                <h2>Where:</h2>
                <p>
                    <a href='https://thechristmassteps.com/' target='_blank'>
                    The Christmas Steps<br />
                    Bristol, BS1 5BS
                    </a>
                </p>
            </div>
            <MapWidget className='flexItemBackground'/>
        </div>
    )
}