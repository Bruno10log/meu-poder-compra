 import styled, {keyframes, css} from 'styled-components';

export const Container = styled.div`
    max-width: 750px;
    border-radius: 7px;
    padding: 15px;
    margin:100px auto;
    flex-direction: column;
    display: flex;

    @media only screen and (max-width: 768px) {
        div:nth-child(2) {
            margin-top: 4%;
        }

        margin: 0;
    }

    div{
        
        @media only screen and (min-width: 768px) {
            flex-direction: row;
        }
        
        align-items: center;
        flex-direction: column;
        justify-content: space-between;
        display: flex;
        border-radius: 15px;
        
        div{

            @media only screen and (min-width: 768px) {
                width: 48%;
            }
            
            width: 95%;
            align-items: center;
            height: 50%;
            background: #A5E4E8;
            border-radius: 15px;
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            
            h2 {
                font-size: 160%;
                font-weight: bold;
                color: white;  
            }
            
            input {
                flex: 1;
                margin: 30px;
                border-radius: 20px;
                padding: 10px 15px; 
                font-size: 20px;
                width: 80%;

                &:focus {
                    border-color: #6DEBCD;
                    transform: translate(0%, -2%);
                    transition: 0.3s ease-out; 
                }

            }
        }
    }

    
`;

export const CalcButton = styled.button`

    background: #A5E4E8;
    border-radius: 15px;
    font-size: 30px;
    color: #fff;
    display: flex;
    justify-content: center;
    margin-top: 4%;
    height: 70px;
    
    &:hover {
        border-color: #6DEBCD;
        transform: translate(0%, -2%);
        transition: 0.3s ease-out;
    }
`;

export const ResultContainer = styled.div`
    background: #A5E4E8;
    border-radius: 15px;
    font-weight: bold;
    font-size: 30px;
    margin-top: 25px;
    min-height: 100px;
    color: #fff;
    label {
        margin: 5%;
    }
`