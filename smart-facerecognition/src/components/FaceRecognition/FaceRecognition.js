import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageUrl,box}) => {
    return (
        <div className='center ma'>
            <div className='absolute m2'>
            <img  id='inputImage' alt='' src={imageUrl} width='500px' height='auto'></img>
            <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            </div>
        </div>
    );
}

export default FaceRecognition;