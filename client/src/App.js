import React, { Component } from 'react';
import { Switch, Route, Router } from 'react-router-dom'

// Components
import GameCreator from './components/GameCreator/GameCreator.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/create' component={ GameCreator } /> 
        </Switch>
      </div>
    );
  }
}

export default App;
