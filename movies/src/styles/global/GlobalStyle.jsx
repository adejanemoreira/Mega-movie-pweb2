import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --maxWidth: 1280px;
        --white: #fff;
        --lightGray: #eee;
        --mediumGray: #353535;
        --darkGray: #1c1c1c;
        --fontSuperBig: 2.5rem;
        --fontBig: 1.5rem;
        --fontMedium: 1.1rem;
        --fontSmall: 0.9rem;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        font-family:'Quicksand';
    }
    body{

        h1{
            background-color: #209cee;
            padding: .5rem;
            border-radius: 90px;
            box-shadow: 4px 7px 15px -3px rgba(0,0,0,0.75); 
            color: white;
            text-align: center;
        }
        h3{
            font-size: 1.1rem;
            font-weight: 600;
        }
        p{
            font-size: 1rem;
            color: var(--white);
        }
    }
`;
