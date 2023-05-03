
import './App.css';
import {Route,Routes} from "react-router-dom"
import Home from "./components/Home"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
          <h2>Food</h2><h1 className='headertitle2'>Hub</h1>
        
        
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
