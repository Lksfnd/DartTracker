import React, { Component } from 'react';

import {
    ButtonBox
    } from './NumberButton.style';
class NumberButton extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <ButtonBox>
                { this.props.value }
            </ButtonBox>
        );
    }
}

export default NumberButton;