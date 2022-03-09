import './App.css';
import Navbar from './nav-bar';
import PictureList from './pictures';

import {useState} from 'react'
function App() {
  var [score,setScore]=useState(0)
  return (
    <div className="App">
      <Navbar score={score}/>
      <header className="App-header">
        <PictureList setScore={[score,setScore]}/>
      </header>
    </div>
  );
}

export default App;
