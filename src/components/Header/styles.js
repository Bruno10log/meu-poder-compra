import styled from 'styled-components';

export const Title = styled.header`

    @media only screen and (max-width: 768px) {
        height: 50px;
        font-size: 28px;
    }

    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    cursor: pointer;
    background: #A5E4E8;
    font-size: 60px;
    height: 75px;
    flex: 1;
    color: white;
    box-shadow: 0 0 40px rgba(0,0,0,0.2);
    padding: 0px 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    &:hover {
        border-color: #6DEBCD;
        transform: translate(0%, -5%);
        transition: 0.3s ease-out;
    }
`