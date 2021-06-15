import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange,onButtonSubmit}) => {
    return(
        <div className='linkForm'>
            <p className='f3 pa2'>{'This magic brain will detect faces in your pictures !!!'}</p>
            <div className='search'>
                <div className='form pa3 br3 shadow-5'>
            <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}></input>
            <button className='w-30 pa2 grow f4 link ph3 pv2 dib white bg-blue ' onClick={onButtonSubmit}>Detect</button>
            </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;