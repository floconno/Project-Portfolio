import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/AboutMe" component={AboutMe} />
        <Route path="/Projects" component={Projects} />
        <Route path="/Contact" component={Contact} />
      </Switch>
    </Router>
  );
};

export default App;


