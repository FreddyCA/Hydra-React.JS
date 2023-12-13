import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --color--textPrimary: #fff;
        --color--textSecondary: #343045;
    }

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    html {
        font-size: 16px;
        font-family: 'Montserrat', sans-serif;
        background-color: #302C42;
    }
`;

export default GlobalStyle;
