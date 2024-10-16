import { createGlobalStyle } from "styled-components";
import { device } from "./adaptability";

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
        --light-danger-color: #bd5942;
        --danger-color: #c23036;
        --dark-danger-color: #a0001e;
        --disabled-color: #748a94;
        --light-warning-color: #ffdf82;
        --dark-warning-color: #805d00;
        --purple-color: #86769d;

        &.dark-mode {
            --light-bg-color: #202a22;
            --dark-bg-color: #344036;
            --lightest-bg-color: #344036;
            --light-text-color: #c1c4c1;
            --dark-text-color: #c1c4c1;
            --main-color: #5c665e;
            --emphasis-color: #3e5d6c;
            --dark-emphasis-color: #304f5d;
            --danger-color: #a0001e;
            --dark-danger-color: #87000e;
            --disabled-color: #3d525b;
            --light-success-color: #689c74;
            --dark-success-color: #13341d;
            --light-warning-color: #a1882e;
            --dark-warning-color: #332500;
        }
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

        @media ${device.tablet} {
            font-size: 1.3rem;
        }

        @media ${device.mobile} {
            font-size: 1rem;
        }
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
        
        @media ${device.tablet} {
            font-size: 1rem;
        }
    }

    input {
        &:disabled {
            cursor: not-allowed;
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
