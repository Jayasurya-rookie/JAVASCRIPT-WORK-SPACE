
import { useState } from "react";
function App() {
  const [x, setX]= useState(0);//x value
  const [y, setY]=useState(0);// y value

  const [resultadd, setresultadd]=useState(0);// add
  const [resultsub, setresultsub]=useState(0);// sub
  const[resultmul, setresultmul]=useState(0);//mul

  const[resultdiv, setresultdiv]=useState(0);//division

  function mul(){
    setresultmul(x * y);
  }

  function add(){
    setresultadd( x + y);//addition
  }
  function sub(){
    setresultsub( x - y);//substraction
  }

  function div(){
    setresultdiv(x /y);
  }













  function decrementy(){
    setY(y - 1);
  }
  function incrementy(){
    setY(y + 1);
  }
  function decrement(){
    setX(x - 1);
    
  }

  function increment(){
    setX(x + 1);
  }
  return (
    <div className="App">
      <button onClick={decrement}>-</button>
      <input type="text" readOnly value={x}></input>
      <button onClick={increment}>+</button>
<br></br>
<br></br>
      <button onClick={decrementy}>-</button>
      <input type="text" readOnly value={y}></input>
      <button onClick={incrementy}>+</button>


      <br></br>
<br></br>
      <button onClick={add}>Addition</button>
      <input type="text" readOnly value={resultadd}></input>
     <br></br>
     <br></br>
     <button onClick={sub}>Substraction</button>
     <input type="text" readOnly value={resultsub}></input>
  <br>
  </br>
  <br></br>
  <button onClick={mul}>Multi</button>
  <input type="text" readOnly value={resultmul}></input>

  <br></br>
  <br></br>
  <button onClick={div}>Division</button>
  <input type="text" value={resultdiv}></input>
    </div>


  );

}

export default App;
