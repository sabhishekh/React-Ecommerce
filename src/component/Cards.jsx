import React from 'react';
import './Add.css';
import Addcard from '../component/Addcard'
function Cards(props) {
    return (
        <div className='Cards-conatiner'>
        <img src={props.imgsrc} alt="css" height={200} width={247}/>
        <h3>{props.Title}</h3>
        <h4>{props.Rs}</h4>
<button ><Addcard/></button>
    </div>
    
         
    );
}

export default Cards;


