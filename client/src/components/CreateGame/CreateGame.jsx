import React, { Component } from 'react';

import {
    Container,
    SettingsRow,
    AddPlayerButton,
    StartGameButton
    } from './CreateGame.style';

import GameSizeSelector from './elements/GameSizeSelector.jsx';
import InOutSelector from './elements/InOutSelector.jsx';
import PlayerBadge from './elements/PlayerBadge.jsx';

class CreateGame extends Component {

    constructor(props) {
        super(props);
        this.state = {
            players: [],
            size: 301,
            inMode: 0,
            outMode: 0
        };

        this.sizeChanged = this.sizeChanged.bind(this);
        this.inModeChanged = this.inModeChanged.bind(this);
        this.outModeChanged = this.outModeChanged.bind(this);
        this.handleAddPlayer = this.handleAddPlayer.bind(this);
    }

    sizeChanged(size) {
        this.setState({ size });
    }

    inModeChanged(mode) {
        this.setState({ inMode: mode });
    }
    outModeChanged(mode) {
        this.setState({ outMode: mode });
    }

    handleAddPlayer() {
        let players = this.state.players;
        players.push(
            <PlayerBadge key={ players.length }/>
        );
        this.setState({ players })
    }

    render() {
        return(
            <Container className={ milligram.container }>
                <h1>Create game</h1>
                <hr/>
                <div className={ milligram.row }>
                    <SettingsRow className={ 
                        milligram["column"] + " " +
                        milligram["column-33"] + " " }>
                        <h4>Settings</h4>
                        
                        <GameSizeSelector onChange={ this.sizeChanged }/>
                        <br/>
                        <InOutSelector 
                            onChange={ this.inModeChanged }
                            isOut={ false } />
                        <InOutSelector 
                            onChange={ this.outModeChanged }
                            isOut={ true } />
                    </SettingsRow>

                    <SettingsRow className={ 
                        milligram["column"] + " " +
                        milligram["column-66"] + " " }>
                        <h4>Players</h4>
                        <hr/>
                        <div>
                            { this.state.players }
                        </div>
                        <AddPlayerButton src='/assets/buttons/plus.png' onClick={ this.handleAddPlayer }/>
                        <StartGameButton className={
                            milligram.button + " " +
                            milligram["button-large"] }>
                            Start game
                        </StartGameButton>
                    </SettingsRow>
                </div>
            </Container>
        );
    }
}

export default CreateGame;