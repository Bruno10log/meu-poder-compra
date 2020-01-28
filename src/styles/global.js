import { createGlobalStyle } from 'styled-components';
import img from  '../img/money3.jpg';

export default createGlobalStyle`

    @import url('https://fonts.googleapis.com/css?family=Muli&display=swap');

    *{
        outline: 0;
        box-sizing: border-box;
        font-family:  arial;
        font-weight: bold;
    }

    html, body, #root {
        min-height: 100%;
        opacity: 0.989;
    }

    header {
        
        @media only screen and (max-width: 768px) {
            font-size: 28px;
        }

        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        cursor: pointer;
        background: #A5E4E8;
        font-size: 55px;
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
    }

    body {
        background: #A5E4E8;
        -webkit-font-smoothing: antialised !important;
        background-image: url(${img});
    }



    button {
        cursor: pointer;
    }

    ::selection {
        background: #6DEBCD;
    }
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }

    /* Firefox */
    input[type=number] {
    -moz-appearance:textfield;
    }
`;
