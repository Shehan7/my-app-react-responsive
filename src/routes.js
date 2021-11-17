import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home/home';
import About from './pages/About/about';
import Contact from './pages/Contact/contact';
import SignUp from './pages/SignUp/signUp';


const main = () => (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/signup' component={SignUp}/>
      </Switch>
    </main>
  )

export default main
