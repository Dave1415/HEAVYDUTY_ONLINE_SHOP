import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = () => {
    return (
      <div>
        <p className='fs'>
            {'This Magic Brain Will detect faces in your picture.  give it a try'}
        </p>
        <div className='center'>
          <div className='form center pa4 br3 shadow-4'>
             <input className='f4 pa2 w-70 center' type='text' />
             <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>Detect</button>
          </div>
        </div>   
      </div>
    );
}

export default ImageLinkForm;