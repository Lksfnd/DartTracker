import styled from 'styled-components';

// ${props => props.used ? 0.2 : 1.0 }

export const Box = styled.div`
    background-color: white;
    height: 200px;
    font-size: 22pt;
`;

export const StatTable = styled.table`
    border: 1px solid red;
`;

export const Row = styled.tr`
    height: ${ props => props.small ? '75px' : '125px' }
`;

export const Column = styled.td`
    border: 1px solid red;
    width: ${ props => props.width || 'auto' };
`;

// Icon
export const ProfileIcon = styled.img`
    height: 55px !important;
    width: 55px !important;
    margin: 0 0.5em;
    padding-top: 0;
    margin-top: -5px;
    position: absolute;
`;

// Text elements
export const PlayerName = styled.span`
    margin-left: 3em;
`;

export const AverageScore = styled.div`
    width: 100%;
    text-align: center;
`;