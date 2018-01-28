import styled from 'styled-components';

export const ButtonBox = styled.div`
    width: 25%;
    height: 100px;
    text-align: center;
    color: black;
    font-size: 30pt;
    float:left;
    background-color: rgba(0,0,0,0.1);
    border: 1px solid rgba(0,0,0,0.25);
    padding-top: 0.5em;
    &:hover {
        background-color: rgba(0,0,0,0.2);
        cursor: pointer;
    }
`;