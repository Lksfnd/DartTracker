import styled from 'styled-components';


export const Container = styled.div`
    margin-top: 1em;
    padding-bottom: 0;
    margin-bottom: 0;
`;

export const ProfileColumn = styled.div`
    width: 50%;
    margin-left:25%;
    @media(min-width: 1500px) {
        width: 35%;
        margin-left: 32.5%;
    }
    @media(max-width: 500px) {  
        width: 100%;
        margin-left: 0;
    }
`;

// TODO: Replace with selector component
export const ProfileIcon = styled.img`
    width: 150px;
    margin-left: calc(50% - 75px);

    &:hover {
        opacity: 0.5;
        cursor: pointer;
    }
`;

export const NickNameBox = styled.input`
    font-size:22pt;
    padding-top: 1em !important;
    padding-bottom: 1em !important;
    text-align: center;
`;

export const SaveButton = styled.a`
    width: 100%;
    font-size: 18pt;
`;

export const Emoji = styled.img`
    width: 35px;
    text-align:center;
    &:hover {
        cursor:pointer;
        background-color: rgba(0,0,0,0.25);
        border-radius: 50px;
    }
`;