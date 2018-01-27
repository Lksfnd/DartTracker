import React, { Component } from 'react';

import {
    SelectionButton,
    FullwidthDiv,
    NumberBox
    } from './GameSizeSelector.style';

const ActiveStyle = {
    color: 'white',
    backgroundColor: '#9b4dca'
};

class GameSizeSelector extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selection: 501,
            onChange: this.props.onChange || function() {} // dont ask me why ()=>{} doesn't work...
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(button) {
        if(button.target.value !== undefined) {
            this.setState({
                selection: button.target.value
            });
        } else {
            this.setState({
                selection: parseInt(button.target.innerText)
            });
        }
        this.state.onChange(this.state.selection);
    }

    render() {
        return(
            <FullwidthDiv>
                <b>Select start amount:</b>
                <br/>
                <SelectionButton 
                onClick= { this.handleClick }
                style={
                    (this.state.selection === 301) ? ActiveStyle : {} }>301</SelectionButton>
                <SelectionButton 
                onClick= { this.handleClick }
                style={
                    (this.state.selection === 401) ? ActiveStyle : {} }>401</SelectionButton>
                <SelectionButton 
                onClick= { this.handleClick }
                style={
                    (this.state.selection === 501) ? ActiveStyle : {} }>501</SelectionButton>
                <SelectionButton 
                onClick= { this.handleClick }
                style={
                    (this.state.selection !== 301&&this.state.selection !== 401&&this.state.selection !== 501) ? ActiveStyle : {}   
                }>
                    <NumberBox type="number" placeholder="..." />
                </SelectionButton>
            </FullwidthDiv>
        );
    }
}

export default GameSizeSelector;