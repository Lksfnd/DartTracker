import React, { Component } from 'react';
import rest from 'restler';

import ApiRoute from '../../handlers/ApiRoute';

import {
    Container,
    TableHeader,
    ProfileIcon,
    IconButton
    } from './ListPlayers.style';

class ListPlayers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            players: []
        };

        rest.get(ApiRoute('/player/findall')).on('complete', (result) => {
            this.setState({
                players: result.data
            });
        });
    }

    render() {
        let playerList = [];

        let i=0;
        for(let player of this.state.players) {
            playerList.push(
                <tr key={ i }>
                    <td>
                        <ProfileIcon src={ player.pictureUrl || 'https://image.ibb.co/keueEG/user_default.jpg' }/>
                    </td>
                    <td> { player.name } </td>
                    <td> { player.wins } </td>
                    <td> { player.losses } </td>
                    <td> { Math.round(player.wins/(player.wins+player.losses))||"0" + " %" } </td>
                    <td>
                        <IconButton src={ '/assets/buttons/waste.jpg' }/>
                        <IconButton src={ '/assets/buttons/pen.png' }/>
                        <IconButton src={ '/assets/buttons/eye.png' }/>
                    </td>
                </tr>
            );
            i++;
        }

        return(
            <Container>
                <h1>Player List</h1>
                <hr/>
                <table>
                    <TableHeader>
                        <tr>
                            <td>Icon</td>
                            <td>Name</td>
                            <td>Wins</td>
                            <td>Losses</td>
                            <td>Winrate</td>
                            <td>Actions</td>
                        </tr>
                    </TableHeader>
                    <tbody>
                        { playerList }
                    </tbody>
                </table>
            </Container>
        );
    }
}

export default ListPlayers;