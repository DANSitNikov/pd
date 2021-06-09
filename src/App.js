import React from 'react';
import Menu from './components/menu/Menu';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Project from './pages/project/Project';
import Contacts from './pages/contacts/Contacts';
import AboutTeam from './pages/aboutTeam/AboutTeam';
import Model from './pages/model/Model';

const App = () => {
  return (
    <Router>
      <Menu />
      <Switch>
        <Route path="/about-team">
          <AboutTeam />
        </Route>
        <Route path="/model">
          <Model />
        </Route>
        {/*<Route path="/contacts">*/}
        {/*  <Contacts />*/}
        {/*</Route>*/}
        <Route path="/">
          <Project />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
