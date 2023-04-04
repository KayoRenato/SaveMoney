import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${props => props.theme['primary-300']}; ;
}


body {
    background: ${props => props.theme['primary-50']};
    color: ${props => props.theme['secondary-400']};

    -webkit-font-smoothing: antialiased;
}


body, input, button, textarea {
    font: 300 1rem Kanit, sans-serif;
}
`