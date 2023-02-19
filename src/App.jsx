import React from 'react';
import './App.css';
import Header from './component/Header'
import Cards from './component/Cards'
import Gold from './image/Gold1.jpg';
import laptop from './image/laptop7.jpg';
import Shirt from './image/Shirt1.jpg'

import Shirt2 from './image/Shirt2.jpg';
import Goldwomen from  './image/Goldwomen.jpg';
import laptop3 from './image/laptop3.jpg';
import Gold2 from './image/Gold2.jpg';





function App() {
  

  return (
    
  <>
      
    <div className='main-heading'>
        <h1>Simple-Ecart</h1>
        
      </div>
    <Header/>
      <div className='card-items'>
      <Cards  imgsrc={Gold} Title='Gold-men' Rs="13000Rs"> </Cards> 
      <Cards imgsrc={laptop} Title="ACER" Rs ="50000RS" />
      <br/>
      

      <Cards imgsrc={Shirt} Title="Shirt-men" Rs="650rs" />
      <Cards imgsrc={Shirt2} Title="Shirt-Women" Rs="35000" />
      <Cards imgsrc={Goldwomen} Title="Goldchain" Rs="35000" />
      <Cards imgsrc={laptop3} Title="Superlaptop" Rs="35000" />
      <Cards imgsrc={Gold2} Title="Gold" Rs="35000" />
      
      <Cards imgsrc={Gold2} Title="Bracelet-women" Rs="35000" />
    
      
    </div>
    
   
</>


);
}
export default App;
