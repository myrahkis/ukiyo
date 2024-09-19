import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
    --main-color: ;
    --emphasis-color: ;
    --light-text-color: ;
    --dark-text-color: ;
    --light-bg-color: ;
    --dark-bg-color: ;
    }

    * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    }

    html {
    font-size: 65%;
    }

    body {
    font-family: ;
    color: ;
    font-size: 1.5rem;
    min-height: 100vh;
    }

    button {
    cursor: pointer;
    }
`;

export default GlobalStyles;
