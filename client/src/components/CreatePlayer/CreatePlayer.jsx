import React, { Component } from 'react';
import rest from 'restler';

import ApiRoute from '../../handlers/ApiRoute';
import Config from '../../Config';

import { 
    Container, 
    ProfileColumn,
    ProfileIcon,
    NickNameBox,
    SaveButton,
    Emoji
    } from './CreatePlayer.style';

class CreatePlayer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nickname: "",
            imageUrl: "https://image.ibb.co/keueEG/user_default.jpg"
        };

        this.handleNickNameChange = this.handleNickNameChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleImageClick = this.handleImageClick.bind(this);
        this.handleEmojiClick = this.handleEmojiClick.bind(this);
    }

    handleNickNameChange(event) {
        this.setState({
            nickname: event.target.value
        });
    }

    handleImageClick() {
        const path = prompt("Please enter an image URL: ", "https://image.ibb.co/keueEG/user_default.jpg");
        if(path.length <= 4) {
            return;
        }
        this.setState({
            imageUrl: path
        });
    }

    handleSave() {
        const name = this.state.nickname;
        const imageUrl = this.state.imageUrl;
        if(name.length === 0) {
            alert("Please enter a Nickname");
            return;
        }
        this.submitData({
            name,
            pictureUrl: imageUrl
        }); 
    }

    handleEmojiClick(event) {
        let imageUrl = event.target.getAttribute('src');
        this.setState({
            imageUrl
        });
    }

    submitData(data) {
        const URL = ApiRoute('/player/create');
        rest.postJson(URL, {
            data
        }).on('complete', function(data, response) {
            alert("Account created successfully!");
        });
    }

    render() {
        let emojiBoxes = [];
        let i=0;
        for(let emoji of Config.emoji_list) {
            emojiBoxes.push(
                <Emoji key={ i } src={ '/assets/emoji/' + emoji } onClick={ this.handleEmojiClick } />
            );
            i++;
        }


        return(
            <Container>
                <div>
                    { /* Left Row: Settings */ }
                    <ProfileColumn>
                        <h1>Create a new player</h1>
                        <hr/>
                        <p>Add your image or use an Emoji as Picture</p>
                        <ProfileIcon 
                            src={ this.state.imageUrl } 
                            onClick={ this.handleImageClick }/>
                            <hr/>
                        { emojiBoxes }

                        <NickNameBox 
                            type="text" 
                            placeholder="NickName"
                            value={ this.state.nickname }
                            onChange={ this.handleNickNameChange } 
                            required/>
                        <SaveButton 
                            className={ 
                                milligram.button + " " +
                                milligram["button-large"] 
                            }
                            onClick={ this.handleSave }>
                            Save
                        </SaveButton>
                    </ProfileColumn>
                </div>
            </Container>
        );
    }
}

export default CreatePlayer;