
import './App.css';
import {Route,Routes} from "react-router-dom"
import Home from "./components/Home"
import something from "./foodhublogo.png"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
          {/* <h2 className='headertitle1'>Food</h2><h1 className='headertitle2'>Hub</h1> */}
          <img className='foodhublogo' src={something} alt="logo"/>
        
        
      </header>
      <Routes>
        <Route path="/"element={<Home/>}/>
      </Routes>
      {/* <footer  className='footer'>
        gjhgjgjhg
      </footer> */}
    </div>
  );
}

export default App;
