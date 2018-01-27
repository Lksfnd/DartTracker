import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import milligram from 'milligram/dist/milligram.min.css';
window.milligram = milligram;

// Import components
import CreatePlayer from './CreatePlayer/CreatePlayer.jsx';
import ListPlayers from './ListPlayers/ListPlayers.jsx';
import CreateGame from './CreateGame/CreateGame.jsx';
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
                    <Route exact path='/player/list' component={ ListPlayers } />
                    <Route exact path='/game/create' component={ CreateGame } />
                </Switch>
            </div>
        );
    }
}