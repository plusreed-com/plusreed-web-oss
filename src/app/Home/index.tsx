import React, { Component } from 'react';
import * as DummyPicture from './assets/images/dummy.png';
import {
    CenterScreen,
    Container,
    HeroBody,
    Subtitle,
    Title
} from './styles';

// Lazy-load FursonaPicture component.
const FursonaPicture = React.lazy(() => import('./components/FursonaPicture'));

class Home extends Component {
    render() {
        return (
            <div css={CenterScreen}>
                <div css={HeroBody}>
                    <div css={Container}>
                        <FursonaPicture image={DummyPicture} />
                        <h1 css={Title}>Hi, I'm Reed</h1>
                        <h2 css={Subtitle}>I'm a 17 year old developer of sorts.</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;