import { css } from '@emotion/core';

export const CenterScreen = css`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    text-align: center;
`;

export const Container = css`
    margin: 0 auto;
    position: relative;
`;

export const HeroBody = css`
    padding: 3rem 1.5rem;
    flex-grow: 1;
    flex-shrink: 0;
`;

export const Subtitle = css`
    color: #4a4a4a;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.25;
    margin-top: -1.25rem;
`;

export const Title = css`
    color: #363636;
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.125;
    margin-bottom: 1.5rem;
`;