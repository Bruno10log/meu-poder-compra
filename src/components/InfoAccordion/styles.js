import styled from 'styled-components';

export const Accordion = styled.div`

    width: 20%;

    button {
        background-color: #eee;
        color: #444;
        cursor: pointer;
        padding: 18px;
        width: 100%;
        text-align: left;
        border: none;
        outline: none;
        transition: 0.
    }

    div {
        padding: 0 18px;
        background-color: white;
        display: ${props => props.expand ? 'block' : 'none'} ;
        overflow: hidden;
    }
`;
