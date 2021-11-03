import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home/home';
import About from './pages/About/about';


const main = () => (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
      </Switch>
    </main>
  )

export default main
