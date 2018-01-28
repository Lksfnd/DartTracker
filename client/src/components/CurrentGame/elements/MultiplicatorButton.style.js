import styled from 'styled-components';

export const ButtonBox = styled.div`
    width: 25%;
    height: 100px;
    text-align: center;
    font-size: 30pt;
    float:left;

    background-color: ${props => props.accent ? '#c44100' : '#00af00'};
    color: white;

    border: 1px solid rgba(0,0,0,0.25);
    padding-top: 0.5em;
    &:hover {
        opacity:0.9;
        cursor: pointer;
    }
`;