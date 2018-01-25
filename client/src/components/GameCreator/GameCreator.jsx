import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import styled from 'styled-components';

// import Components
import GameConfiguration from './GameConfiguration.jsx';

const Title = styled.div`
  margin-top: 1em;
`;
const ConfigBox = styled.div`
  border-right: 1px solid #bababa;
  border-left: 1px solid #bababa;
  margin-right: -1px;
  height: 100%;
`;

class GameCreator extends Component {
    render() {
        return (
            <Title className="container">
                <h1 className="is-size-2">Create new game...</h1>
                <hr/>
                <div className="columns">
                    <GameConfiguration/>
                    <GameConfiguration/>
                    <GameConfiguration/>
                </div>
                <a href="" className="button is-medium is-dark">Start game</a>
            </Title>
        );
    }
}

export default GameCreator;