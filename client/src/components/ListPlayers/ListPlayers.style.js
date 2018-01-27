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

export const TableHeader = styled.thead`
    font-weight: bold;
    text-align: center;
`;

export const ProfileIcon = styled.img`
    width: 32px;
`;

export const IconButton = styled.img`
    width: 32px;

    &:hover {
        cursor: pointer;
        opacity: 0.5;
    }
`;