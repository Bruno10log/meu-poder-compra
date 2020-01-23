import { createGlobalStyle } from 'styled-components';
import img from  '../img/money3.jpg';

export default createGlobalStyle`

    @import url('https://fonts.googleapis.com/css?family=Muli&display=swap');

    *{
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        min-height: 100%;
        opacity: 0.989;
    }

    header {
        cursor: pointer;
        background: #A5E4E8;
        font-size: 75px;
        flex: 1;
        color: white;
        box-shadow: 0 0 40px rgba(0,0,0,0.2);
        padding: 0px 10px;
        &:hover {
            border-color: #6DEBCD;
            transform: translate(0%, -10%);
            transition: 0.3s ease-out;
        }
    }

    body {
        background: #A5E4E8;
        -webkit-font-smoothing: antialised !important;
        background-image: url(${img});
    }

    body, input, buttons {
        font-family: "Times New Roman", serif;
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
