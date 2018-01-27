import styled from 'styled-components';

export const SelectionButton = styled.span`

    padding: 0.25em 0.75em;
    border: 1px solid #9b4dca;
    margin-left: -1px;
    color: #232323;


    &:hover {
        cursor: pointer;
    }

    font-size: 15pt;

    max-width: 10px !important;
`;

export const FullwidthDiv = styled.div`
    width: 100%;
`;

export const NumberBox = styled.input`
    border: none !important;
    margin: 0 !important;
    padding: 0 !important;
    max-width: 15% !important;
    font-size: 15pt;
    text-align: center;
    margin-left: 0;
    margin-right:0;
    color: black;
`;