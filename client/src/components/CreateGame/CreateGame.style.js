import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 1em;
    padding-bottom: 0;
    margin-bottom: 0;
    width: 70%;
    margin-left: 17.5%;

    @media(max-width: 500px) { 
        width:100%;
        margin-left: 0;
    }
`;

export const SettingsRow = styled.div`
    border-right: 1px solid #cacaca;
    border-left: 1px solid #cacaca;
    margin-right: -1px;
`;

export const AddPlayerButton = styled.img`
    width: 50px;
    margin-left: calc(50% - 25px);
    opacity: 0.6;

    &:hover {
        cursor: pointer;
        opacity: 1.0;
    }
`;

export const StartGameButton = styled.a`
    position: absolute;
    right: 2em;
    margin-top: 5em;
`;