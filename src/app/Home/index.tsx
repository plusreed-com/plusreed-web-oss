import React, { Component } from 'react';
import * as DummyPicture from './assets/images/dummy.png';
import {
    Heading,
    Subheading
} from './styles';
import Helmet from 'react-helmet';

const Bar = React.lazy(() => import('./components/Bar'));
const DevBar = React.lazy(() => import('./components/DevBar'));
const FursonaPicture = React.lazy(() => import('./components/FursonaPicture'));

class Home extends Component {
    render() {
        return (
            <>
                <Helmet bodyAttributes={{
                    style: 'background-color: #2B2B2B'
                }} />

                {/* Simple striped bar in development mode */}
                {
                    process.env.NODE_ENV === 'development' ||
                    process.env.NODE_ENV === 'test' ? 
                        <DevBar text={"dev build"} /> 
                        : ''
                }

                <Bar />

                <FursonaPicture image={DummyPicture} />

                <h1 css={Heading}>
                    👋 Hey, I'm Reed.
                </h1>

                <p css={Subheading}>
                    I'm a developer of sorts.
                </p>
            </>
        )
    }
}

export default Home;