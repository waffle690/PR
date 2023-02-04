import { useState } from 'react';
import './Appp.css';
import './App.css';


function App() {
    let [colr, setColr] = useState(false);
    
    return <div>
      <span>{colr ? <p id="neg">Включено</p> : <p id="negr">Выключенно</p>}</span>
      <button onClick={() => setColr(!colr)}>btn</button>
    </div>;
  }
  
//  function App() {
//     let [colr, setColr] = useState(false);
    
//     return <div>
//       <span>{colr ? App.css: "в" }</span>
//       <button onClick={() => setColr(!colr)}>btn</button>
//     </div>;
//   }
  


export default App;