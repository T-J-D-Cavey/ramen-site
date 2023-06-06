import {MapWidget} from './MapWidget';

export function Location() {
    return (
        <div className='flexContainerBigBackground column location'>
            <div className='flexItemBackground address'>
                <h2>Where:</h2>
                <p>
                    <a href='https://thechristmassteps.com/' target='_blank'>
                    The Christmas Steps<br />
                    Bristol<br />
                    BS1 5BS
                    </a>
                </p>
            </div>
            <MapWidget className='flexItemBackground'/>
        </div>
    )
}