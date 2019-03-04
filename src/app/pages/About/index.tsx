import React from 'react';
import { css } from '@emotion/core';

/**
 * @todo Move CSS to styles.
 * @todo Add more information to this.
 */
const About = () => (
    <>
        <h1 css={css`
            color: #fff;
        `}>
            About
        </h1>
        <p css={css`
            color: #fff;
        `}>
            Hey there, I'm Reed! I'm a Node.js developer who likes making websites and software.
        </p>
    </>
);

export default About;