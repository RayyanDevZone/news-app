import Navbar from './components/Navbar';
import Main from './components/Main';
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <Router>
        
      </Router>
    </div>
  );
}

export default App;
