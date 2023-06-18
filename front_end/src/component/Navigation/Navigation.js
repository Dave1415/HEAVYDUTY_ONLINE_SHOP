import React from 'react';
import './Navigation.css';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) { 
        return (
            <nav className='pa2' style={{ background: 'white' }}>
                <div>
                    <div className= 'ce' style={{ display: 'flex', justifyContent: 'space-between', background: 'white'}}>
                        <p className='f4 bold link dim black pa2 pointer'>logo</p>
                        <p className='f4 link dim black pa2 pointer'>Product</p>
                        <p className='f4 link dim black pa2 pointer'>About us</p>
                        <p className='f4 link dim black pa2 pointer'>Contact</p>
                        <div className= 'pa1' style={{ display: 'flex', justifyContent: 'flex-end', background: 'white'}}>
                        <button onClick={() => onRouteChange('Signout')} className='grow f4 br-pill link ph3 pv2 mb2 dib black bg-red'>Signout</button>
                    </div>
                    </div>
                </div>
            </nav>
        );
    } else {
        return (
            <nav className='pa2' style={{ background: 'white' }}>
                <div>
                    <div className= 'ce' style={{ display: 'flex', justifyContent: 'space-between', background: 'white'}}>
                        <p className='f4 bold link dim black pa2 pointer'>logo</p>
                        <p className='f4 link dim black pa2 pointer'>Product</p>
                        <p className='f4 link dim black pa2 pointer'>About us</p>
                        <p className='f4 link dim black pa2 pointer'>Contact</p>
                        <div className= 'pa1' style={{ display: 'flex', justifyContent: 'flex-end', background: 'white'}}>
                            <button onClick={() => onRouteChange('Signin')} className='grow f4  br-pill link ph3 pv2 mb2 dib black bg-white'>Signin</button>
                            <button onClick={() => onRouteChange('Register')} className='grow f4 br-pill link ph3 pv2 mb2 dib black bg-red'>Register</button>
                         </div>
                     </div>
                 </div>
            </nav>
        )  
            
    }
}

export default Navigation;