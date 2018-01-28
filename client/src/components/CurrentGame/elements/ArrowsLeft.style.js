import styled from 'styled-components';

export const DartArrow = styled.img`
    width: 65px;
    margin-top: 0.75em;
    margin-left: 1em;

    opacity: ${props => props.used ? 0.2 : 1.0 }
`;

export const ArrowBox = styled.div`
    padding-left: 5%;
    text-align: right;
    margin-right: 7.5%;
    left: 55%;
`;