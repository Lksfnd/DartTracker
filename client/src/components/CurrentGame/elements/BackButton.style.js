import styled from 'styled-components';

export const ButtonBox = styled.div`
    width: 45%;
    height: 100px;
    text-align: center;
    font-size: 30pt;
    float:left;

    background-color: ${props => props.accent ? '#c44100' : '#c47f00'};
    color: white;
    margin-left: 5%;

    border: 1px solid rgba(0,0,0,0.25);
    padding-top: 0.5em;
    &:hover {
        opacity:0.9;
        cursor: pointer;
    }
`;