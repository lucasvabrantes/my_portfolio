import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        box-sizing: border-box;
        padding: 0;
        font-family:var(--font-family);
    }

    html{
        scroll-behavior: smooth;
        overflow-x:hidden;
    }

    ul, ol, li{
        list-style:none;
    }

    button{
        cursor: pointer;
        background: transparent;
        border: 0;
    }

    :root {
        --cyan-900: #0b7285;
        --cyan-700: #0c8599;
        --cyan-500: #22b8cf;
        --grey-300:#343a40;
        --orange-100:#BF8660;
        --font-family:"JetBrains Mono", monospace;
    }
`;
