import React, { Component } from 'react';

import {
    Box,
    StatTable,
    Row,
    Column,
    PlayerName,
    AverageScore,
    ProfileIcon
    } from './PlayerStatBox.style'; 

class PlayerStatBox extends Component {

    constructor(props) {
        super(props);

        this.state = {
            player: this.props.player,
            average: 0.00
        };
    }

    render() {
        return(
            <Box>
                <StatTable><tbody>
                    <Row small>
                        <Column>
                            <ProfileIcon src={ this.state.player.pictureUrl }/>
                            <PlayerName>{ this.state.player.name }</PlayerName>
                        </Column>
                        <Column>
                            <AverageScore>Ø { this.state.average }</AverageScore>
                        </Column>
                    </Row>
                    <Row>
                    <Column width="50%">
                            501
                    </Column>  
                    <Column>
                            STATS
                    </Column>
                    </Row>
                </tbody></StatTable>
            </Box>
        );
    }
}

export default PlayerStatBox;