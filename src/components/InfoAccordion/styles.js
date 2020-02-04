import styled from 'styled-components';

export const Accordion = styled.div`

    width: 20%;
    margin-right: 7%;
    
    @media only screen and (max-width: 768px) {
        width: 71%;
        justify-content: center;
        margin-bottom: 4%;
        margin-right: 0;
    }

    button {
        @media only screen and (max-width: 768px) {
            font-size: 100%;
        }
        font-size: 160%;
        font-weight: bold;
        color: white; 
        background-color: #A5E4E8;
        cursor: pointer;
        padding: 18px;
        width: 100%;
        text-align: left;
        border: none;
        outline: none;
        transition: 0;
        border-top-left-radius: 7px;
        border-top-right-radius: 7px;
        border-bottom-left-radius:  ${props => props.expand ? '0px' : '7px'};
        border-bottom-right-radius: ${props => props.expand ? '0px' : '7px'};
    }

    div {
        border-bottom-left-radius: 7px;
        border-bottom-right-radius: 7px;
        padding: 0 18px;
        color: gray;
        background-color: white;
        display: ${props => props.expand ? 'block' : 'none'} ;
        overflow: hidden;
        transition: display 2s linear;
    }

    
`;




