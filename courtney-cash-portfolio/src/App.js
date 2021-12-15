import './App.css';
import { Switch, Route} from 'react-router-dom';

//component imports

import NavBar from './components/NavBar'
import Home from './components/Home'
import Projects from './components/Projects'
import AboutMe from './components/AboutMe'
import ContactMe from './components/ContactMe'

function App() {
  return (
    <div className="App">
        <NavBar /> 
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path="/aboutme">
          <AboutMe />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/contact">
          <ContactMe />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
