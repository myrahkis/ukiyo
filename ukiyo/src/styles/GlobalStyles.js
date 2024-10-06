import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --main-color: #6b7b6e;
        --emphasis-color: #3e5d6c;
        --light-emphasis-color: #708f9f;
        --dark-emphasis-color: #354a54;
        --light-text-color: #f3fcf4;
        --success-emphasis-color: #358f81;
        --dark-text-color: #182c1d;
        --light-bg-color: #9fafa1;
        --lightest-bg-color: #c4d6c6;
        --dark-bg-color: #495e4d;
        --success-color: #259651;
        --light-success-color: #8fc59b;
        --dark-success-color: #005d1e;
        --danger-color: #c23036;
        --dark-danger-color: #a0001e;
        --disabled-color: #98afba;
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
        font-family: "Fira Sans", sans-serif;
        color: var(--light-text-color);
        background-color: var(--light-bg-color);
        font-size: 1.5rem;
        min-height: 100vh;
    }

    button {
        cursor: pointer;

        &:disabled {
            cursor: not-allowed;
            background-color: var(--disabled-color);

            &:hover {
                background-color: var(--disabled-color);
            }
        }
    }
`;

export default GlobalStyles;
