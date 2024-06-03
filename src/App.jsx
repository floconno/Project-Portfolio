import React from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/Home" component={<Home />}/>
        <Route path="/AboutMe" component={<AboutMe />} />
        <Route path="/Projects" component={<Projects />} />
        <Route path="/Contact" component={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;


