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
            selectedPlayers: [],
            size: 301,
            inMode: 0,
            outMode: 0
        };

        this.sizeChanged = this.sizeChanged.bind(this);
        this.inModeChanged = this.inModeChanged.bind(this);
        this.outModeChanged = this.outModeChanged.bind(this);
        this.handleAddPlayer = this.handleAddPlayer.bind(this);
        this.playerSelectionChanged = this.playerSelectionChanged.bind(this);
        this.startGame = this.startGame.bind(this);
    }

    playerSelectionChanged(player, index) {
        let selectedPlayers = this.state.selectedPlayers;
        selectedPlayers[index] = player;
        this.setState({ selectedPlayers });
        console.log(this.state);
    }

    sizeChanged(size) {
        this.setState({ size });
    }

    inModeChanged(mode) {
        this.setState({ inMode: parseInt(mode) });
    }
    outModeChanged(mode) {
        this.setState({ outMode: parseInt(mode) });
    }

    handleAddPlayer() {
        let players = this.state.players;
        players.push(
            <PlayerBadge 
                pIndex={ players.length } 
                key={ players.length } 
                onChange={ this.playerSelectionChanged } />
        );
        let selectedPlayers = this.state.selectedPlayers;
        selectedPlayers.push(null);
        this.setState({ players, selectedPlayers })
    }

    startGame() {
        localStorage.setItem("currentGame", JSON.stringify({
            players: this.state.selectedPlayers,
            size: this.state.size,
            modeIn: this.state.inMode,
            modeOut: this.state.outMode
        }));
        location.href = "/game/current";
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
                        <StartGameButton
                            className={
                                milligram.button + " " +
                                milligram["button-large"] }
                            onClick={ this.startGame }>
                            Start game
                        </StartGameButton>
                    </SettingsRow>
                </div>
            </Container>
        );
    }
}

export default CreateGame;