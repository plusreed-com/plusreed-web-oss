import React, { Component } from 'react';
import { Heading, Subheading } from './styles';

import DummyPicture from '../../assets/images/dummy.png';

const FursonaPicture = React.lazy(() => import('./components/FursonaPicture'));

class Sidebar extends Component {
    render() {
        return (
            <>
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

export default Sidebar;