import React,{useState} from 'react';
import {BiPlusMedical} from 'react-icons/bi'
import {FaMinus} from'react-icons/fa'
import '../component/Styles.css';
function App() {
  const [count , setCount] = useState(0)
  return (
    <div>
     <div className='icon-3'>
    <button onClick={()=>setCount(count+1)}>
<BiPlusMedical className='icon'/>
    </button>
    <h5>{count}</h5>
   <button onClick={()=>(count===0?setCount(0):setCount(count-1))}>
    <FaMinus/>
</button>
    </div>
    </div>


    
      
  
  );
}

export default App;