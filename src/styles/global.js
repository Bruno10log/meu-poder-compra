import { createGlobalStyle } from 'styled-components';
import img from  '../img/money_world.jpg';

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
