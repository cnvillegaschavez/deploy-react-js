import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import UserCreate from './components/User/UserCreate';
import UserUpdate from './components/User/UserUpdate';
import List from './components/userlist/List';
import Catalogo from './components/catalogo/Catalogo';
import Movies from './components/movies/Movies';
import Series from './components/series/Series';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
            <Route path="/search">
              <List />
            </Route>
            <Route path="/catalogo">
              <Catalogo />
            </Route>
            
            <Route path="/series">
              <Series />
            </Route>
            <Route path="/user-create" match >
                <UserCreate />
              </Route>
            <Route path="/user-update/:id" match >
              <UserUpdate />
            </Route>

            <Route path="/movies" match >
              <Movies />
            </Route>

          </Switch>
      </div>
    </Router>
  );
}

export default App;
