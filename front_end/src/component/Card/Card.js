import React from "react";
import { Tilt } from 'react-tilt';

const Card = (props) => {
    return (
        <div className= "bg-light ba dib pa3 ma3 br grow shadow-5">
            <div className='ma4 mt0'>
           <Tilt className="Tilt br2 shadow-2">
              <div className='Tilt-inner a3'><img src={props.image} alt='smile'></img></div>
            </Tilt> 
            </div>
    
                    <h2>{ props.product_name }</h2>
            
                    <div className=" ba dim black pointer ma2 pa3 bg-transparent br-pill f4 b ph5 pv3 grow">
                        <p>{props.model}</p>
                    </div>
                    <div className="ba dim black pointer ma2 pa3 bg-transparent br-pill f4 b ph5 pv3 grow">
                        <p className="">{ props.manufacturing_year }</p>
                    </div>
                    
            </div>
    )
}

export default Card;