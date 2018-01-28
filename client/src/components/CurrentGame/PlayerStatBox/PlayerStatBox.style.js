import styled from 'styled-components';

// ${props => props.used ? 0.2 : 1.0 }

export const Box = styled.div`
    background-color: white;
    height: 200px;
    font-size: 22pt;
    margin-bottom: 0.5em;
    border-radius: 15px;
`;

export const StatTable = styled.table`
`;

export const Row = styled.tr`
    height: ${ props => props.small ? '75px' : '125px' };
`;

export const Column = styled.td`
    width: ${ props => props.width || 'auto' };
    border: none;
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
    font-weight: bold;
`;

export const AverageScore = styled.div`
    width: 100%;
    text-align: center;
`;

export const ScoreToHit = styled.div`
    font-size: 38pt;
    width: 100%;
    margin: 0;
    padding: 0 15px 0 0;
    text-align: center;
    font-weight: bold;
`;