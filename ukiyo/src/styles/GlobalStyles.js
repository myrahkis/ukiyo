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
        --disabled-color: #748a94;
        --light-warning-color: #ffdf82;
        --dark-warning-color: #805d00;
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

    /* https://codepen.io/t_afif/pen/VwpWZBr */
    .loader {
        width: 35px;
        aspect-ratio: 1;
        --_g: no-repeat radial-gradient(circle closest-side,var(--light-text-color) 90%,#0000);
        background: 
            var(--_g) 0    0,
            var(--_g) 0    100%,
            var(--_g) 100% 100%;
        background-size: 40% 40%;
        animation:d1 1s infinite linear;
    }
    @keyframes d1 {
        25% {background-position:100% 0   ,0 100%,100% 100%}
        50% {background-position:100% 0   ,0 0   ,100% 100%}
        75% {background-position:100% 0   ,0 0   ,0    100%}
        100%{background-position:100% 100%,0 0   ,0    100%}
    }
`;

export default GlobalStyles;
