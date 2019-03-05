import { css, keyframes } from '@emotion/core';

export const Loading = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const LoadingCircle = css`
    animation: ${Loading} 0.5s ease-in-out infinite;
`;

export const CenterScreen = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 100vh;
`;