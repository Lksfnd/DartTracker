import React, { Component } from 'react';

import {
    ButtonBox
    } from './BackButton.style';

class BackButton extends Component {
    render() {
        return(
            <ButtonBox>
                🡰 Undo
            </ButtonBox>
        );
    }
}

export default BackButton;