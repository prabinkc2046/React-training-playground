import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*, *::before, ::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

body {
    font-family: 'Poppins', sans-serif;
    padding: 20px;
    background-color: ${({theme}) => theme.colors.body};
    line-height: 1.6;
    color: #333;
}
`

export default GlobalStyle;