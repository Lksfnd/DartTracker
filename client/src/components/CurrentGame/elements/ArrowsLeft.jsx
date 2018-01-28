import React, { Component } from 'react';

import {
    DartArrow,
    ArrowBox
    } from './ArrowsLeft.style';

class ArrowsLeft extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return(
            <ArrowBox>
                <DartArrow src='/assets/dart.png' used={ !(this.props.amount >= 3) } />
                <DartArrow src='/assets/dart.png' used={ !(this.props.amount >= 2) } />
                <DartArrow src='/assets/dart.png' used={ !(this.props.amount >= 1) } />
            </ArrowBox>
        );
    }
}

export default ArrowsLeft;