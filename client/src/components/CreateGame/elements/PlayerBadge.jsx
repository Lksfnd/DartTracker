import React, { Component } from 'react';
import rest from 'restler';

import ApiRoute from '../../../handlers/ApiRoute';

import {
    PlayerBadgeBox,
    Thumbnail,
    WinRate,
    NameSelection
    } from './PlayerBadge.style';

class PlayerBadge extends Component {

    constructor(props) {
        super(props);
        this.state = {
            icon: '/assets/someone.png',
            winRate: '',
            availablePlayers: [],
            onChange: this.props.onChange || function(){},
            index: this.props.pIndex || 0
        };

        rest.get(ApiRoute('/player/findall')).on('complete', (result) => {
            this.setState({
                availablePlayers: result.data
            });
            // Simulate selection to load the icon
            this.handleChange({target:{ value: 0 }});
        });
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const selectionIndex = event.target.value;
        const selectedPlayer = this.state.availablePlayers[selectionIndex];

        const winrate = Math.round(selectedPlayer.wins / (selectedPlayer.wins + selectedPlayer.losses));
        this.setState({
            icon: selectedPlayer.pictureUrl,
            winRate: (isNaN(winrate)) ? "" : winrate + " %"
        });
        
        this.state.onChange(selectedPlayer, this.state.index);
    }

    render() {
        let playersOptions = [];
        for(let i=0; i < this.state.availablePlayers.length; i++) {
            playersOptions.push(
                <option value={ i } key={ i }>
                    { this.state.availablePlayers[i].name }
                </option>
            );
        }

        return(
            <PlayerBadgeBox>
                <Thumbnail src={ this.state.icon }/>
                <NameSelection onChange={ this.handleChange }>
                    { playersOptions }
                </NameSelection>
                <WinRate>{ this.state.winRate }</WinRate>
            </PlayerBadgeBox>
        );
    }
}

export default PlayerBadge;