import './App.css';
import { Switch, Route} from 'react-router-dom';

//component imports

import NavBar from './components/NavBar'
import Home from './components/Home'
import Projects from './components/Projects'

function App() {
  return (
    <div className="App">
        <NavBar /> 
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
