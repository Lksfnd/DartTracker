import React, { Component } from 'react';
import styled from 'styled-components';

const AddonField = styled.div`
    width:100%;
`;

class CountScoreSelector extends Component {
    constructor(props) {
        super(props);

        // If in props, use first value, else use the default one
        const defaultSelection = (this.props.options != null) ? this.props.option[0] : 301;

        this.state = {
            // All available options
            options: this.props.options || [301, 401, 501],
            // The value of the default selection
            currentSelection: defaultSelection
        };
    }
    
    render() {

        let options = [];
        for(let option of this.state.options) {
            options.push(
                <p class="control">
                    <a 
                        class={ "button" + ((this.state.currentSelection === option)?" is-primary":"") }
                        onClick={ () => {
                            this.setState({
                                currentSelection: option
                            });
                        } }>
                        <span>{ option }</span>
                    </a>
                </p>
            );
        }

        return(
            <AddonField className="field has-addons">
                { options }
            </AddonField>
        );
    }
}

export default CountScoreSelector;