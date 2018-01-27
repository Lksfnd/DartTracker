import React, { Component } from 'react';

import {
    SelectBox
    } from './InOutSelector.style';

class InOutSelector extends Component {

    constructor(props) {
        super(props);
        this.state = {
            onChange: this.props.onChange || function() {},
            selection: 0
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(newValue) {
        this.setState({ selection: newValue.target.value });
        this.state.onChange(newValue.target.value);
    }

    render() {
        const stateText = this.props.isOut ? "out" : "in";

        return(
            <div>
                <b>{ "Select mode (" + stateText + ")"}:</b>
                <SelectBox defaultValue="0" onChange={ this.handleChange }>
                    <option value="0">none</option>
                    <option value="1">double-{ stateText }</option>
                    <option value="2">triple-{ stateText }</option>
                    <option value="3">master-{ stateText }</option>
                </SelectBox>
            </div>
        );
    }
}

export default InOutSelector;