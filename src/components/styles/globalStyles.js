import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html {
        font-size: 62.5%;
        font-weight: 300;
        --clr-primary: ${props => props.theme.colors.primary};
        --clr-accent: ${props => props.theme.colors.accent};
        --clr-secondary: ${props => props.theme.colors.secondary};

        @media ${props => props.theme.mq.large} {
            font-size: 56.25%;
        }

        @media ${props => props.theme.mq.medium} {
            font-size: 50%;
        }
    }
    
    body {
        background-color: var(--clr-secondary);
        color: var(--clr-primary);
        box-sizing: border-box;
        font-family: 'Merriweather', sans-serif;
    }
`;

export default Global;