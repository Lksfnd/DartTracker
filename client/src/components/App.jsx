import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// Import components
import CreatePlayer from './CreatePlayer/CreatePlayer.jsx';
import DemoElement from './DemoElement.jsx';

export default class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={ DemoElement } />
                    <Route exact path='/player/add' component={ CreatePlayer } />
                </Switch>
            </div>
        );
    }
}