import React, { Component } from 'react';
import styled from 'styled-components';

// import Components
import CountScoreSelector from '../elements/CountScoreSelector.jsx';

const ConfigBox = styled.div`
  border-right: 1px solid #bababa;
  border-left: 1px solid #bababa;
  margin-right: -1px;
  height: 100%;
`;
const ConfigBoxTitle = styled.div`
  border-bottom: 1px solid #dadada;
  font-weight: bold;
  color: hsl(171, 100%, 41%);
`;
const SettingText = styled.b`
    display:inline-block;
    margin-top: 1em;
`;

class GameConfiguration extends Component {

    constructor(props) {
        super(props);

        this.state = {
            gameMode: 301
        };
    }

    render(){
        return(
            <ConfigBox className="column">
                <ConfigBoxTitle className="is-size-4">Game configuration</ConfigBoxTitle>
                <SettingText>Game Name:</SettingText>
                <br/>
                <input type="text" className="input" required placeholder="Game name"/>
                
                <SettingText>Game Size:</SettingText>
                <CountScoreSelector/>
            </ConfigBox>
        );
    }
}

export default GameConfiguration;