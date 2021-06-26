import Navbar from './components/layout/Navbar';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Navbar/>
    </Router>
  );
}

export default App;
