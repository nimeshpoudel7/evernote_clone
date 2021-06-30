import Navbar from "./components/layout/Navbar";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home/Home";
import Favorites from "./components/notes/Favorites";
import NoteDetails from "./components/notes/NoteDetails";
import Editform from "./components/notes/Editform";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/favorite' component={Favorites} />
        <Route path='/note/:id' component={NoteDetails} />
          <Route path='/Editform/:id' component={Editform} />
      </Switch>
    </Router>
  );
}

export default App;
