import { keyframes } from 'styled-components'

export const blink = keyframes`
    from {opacity: 0;}
    to {opacity: 1.0;}
`;

export const fadeIn = keyframes`
    0% { opacity:0; }
    66% { opacity:0; }
    100% { opacity:1; }
`;