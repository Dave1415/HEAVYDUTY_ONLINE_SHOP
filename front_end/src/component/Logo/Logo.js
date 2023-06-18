import React from 'react';

import COVER from './COVER.JPG'
import './Logo.css';


const Logo = () => {
    return (
      <div>
        <div className="bg-light ba dib pa3 ma2 grow shadow-5">
          <h1>HEAVYDUTY ONLINE HEAVY MACHINERY SALES</h1>
        </div>
        <div className='ma4 mt0 dib ba center'>
          
          <div className='Tilt-inner a3'><img src={COVER} alt='smile'></img></div>
        
        </div>
      </div>
    );
}

export default Logo;