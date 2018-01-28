import React, { Component } from 'react';

import {

    } from './MultiplicatorButton.style';
import { ButtonBox } from './MultiplicatorButton.style';

class MultiplicatorButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            multiplicator: this.props.multiplicator || 2,
            onClick: this.props.onClick || function(){}
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.state.onClick();
    }

    render() {
        let button;
        if(this.state.multiplicator === 2) {
            button = <ButtonBox
                        onClick={ this.handleClick }
                        style={ (this.props.active ? { opacity: 0.5 }: {} )}>X2</ButtonBox>;
        } else {
            button = <ButtonBox 
                        onClick={ this.handleClick }
                        style={ (this.props.active ? { opacity: 0.5 }: {} )} 
                        accent>X3</ButtonBox>;
        }

        return(
            <div>
                { button }
            </div>
        );
    }
}

export default MultiplicatorButton;