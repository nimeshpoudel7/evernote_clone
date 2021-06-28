import Navbar from './components/layout/Navbar';
import './App.css';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Home from './components/home/Home'
import Favorites from './components/notes/Favorites';


function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/favorites"component={Favorites}/>
      </Switch>
    </Router>
  );
}

export default App;
