import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Home from './Home';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          LOGIN PAGE
          <div>
            {' '}
            <Link to="/verify">LOGIN WITH SPOTIFY</Link>
          </div>
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route>100 * 4 + 4 = ? That's right. Not found.</Route>
      </Switch>
    </div>
  );
}

export default App;