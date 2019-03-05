import React from 'react';
import { css } from '@emotion/core';
import {
    Heading,
    Subheading
} from './styles';

/**
 * @todo Move CSS to styles.
 * @todo Add more information to this.
 */
const About: React.FunctionComponent<{}> = () => (
    <>
        <h1 css={Heading}>
            About
        </h1>
        <p css={Subheading}>
            Hey there, I'm Reed! I'm a Node.js developer who likes making websites with React.
        </p>
    </>
);

export default About;