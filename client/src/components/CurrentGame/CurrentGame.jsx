import React, { Component } from 'react';

// Components
import Resolver from './elements/Resolver.jsx';
import NumberButton from './elements/NumberButton.jsx';
import BackButton from './elements/BackButton.jsx';
import MultiplicatorButton from './elements/MultiplicatorButton.jsx';
import ArrowsLeft from './elements/ArrowsLeft.jsx';
import PlayerStatBox from './PlayerStatBox/PlayerStatBox.jsx';

// Styled components
import {
    InputSection,
    NumberSection,
    StatSection
    } from './CurrentGame.style';

class CurrentGame extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            x2Active: false,
            x3Active: false,
            game: JSON.parse(localStorage.getItem('currentGame'))
        };

        this.x2Click = this.x2Click.bind(this);
        this.x3Click = this.x3Click.bind(this);
    }

    x2Click() {
        this.setState({
            x2Active: !this.state.x2Active,
            x3Active: false
        });
    }
    x3Click() {
        this.setState({
            x2Active: false,
            x3Active: !this.state.x3Active
        });
    }
    
    render() {
        let numberButtons = [];
        for(let i=1; i <= 20; i++) {
            numberButtons.push(
                <NumberButton value={ i } key={ i }/>
            );
        }

        let statBoxes = [];
        for(let i=0; i < this.state.game.players.length; i++) {
            statBoxes.push(
                <PlayerStatBox player={ this.state.game.players[i] } key={ i } />
            );
        }

        return(
            
            <div>
                <InputSection>
                    <Resolver/>
                    <NumberSection>
                        { numberButtons }
                        <NumberButton value={ 25 }/>
                        <NumberButton value={ 0 }/>
                        <MultiplicatorButton 
                            active={ this.state.x2Active }
                            multiplicator={ 2 }
                            onClick={ this.x2Click } />
                        <MultiplicatorButton 
                            active={ this.state.x3Active }
                            multiplicator={ 3 }
                            onClick={ this.x3Click } />
                    </NumberSection>
                    <BackButton/>
                    <ArrowsLeft amount={ 1 }/>
                </InputSection>
                <StatSection>
                    { statBoxes }
                </StatSection>
            </div>
        );
    }
}

export default CurrentGame;