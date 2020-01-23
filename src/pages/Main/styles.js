import styled from 'styled-components';

export const Container = styled.div`
    max-width: 750px;
    border-radius: 7px;
    padding: 15px;
    margin:100px auto;
    flex-direction: column;
    justify-content: space-between;
    display: flex;

    div{
        flex-direction: row;
        justify-content: space-between;
        display: flex;
        border-radius: 15px;

        div{
            align-items: center;
            width: 48%;
            height: 50%;
            background: #A5E4E8;
            border-radius: 15px;
            display: flex;
            justify-content: space-between;
            flex-direction: column;

            h2 {
                font-size: 30px;
                font-weight: bold;
                color: white;  
                margin: 15px;
            }
            
            input {
                flex: 1;
                margin: 30px;
                border-radius: 20px;
                padding: 10px 15px; 
                font-size: 20px;

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
    font-weight: bold;
    font-size: 30px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
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