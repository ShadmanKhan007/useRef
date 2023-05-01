import './App.css';
import React, {useRef}  from 'react';

function App() {

  const inputRef = useRef(null);

  function handleSubmit() {
    inputRef.current.click();

  }

  return (
   <div>
     <h1>useRef Assignment</h1>
     <button onClick={handleSubmit}>Pick the file</button>

     <input type="file"
      ref={inputRef}
      style={{display: 'none'}}
       />


     </div>
 
  );
}

export default App;




