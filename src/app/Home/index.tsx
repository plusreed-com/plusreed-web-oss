import React, { Component } from 'react';
import * as DummyPicture from './assets/images/dummy.png';
import { css } from '@emotion/core';

import {
    Heading,
    Subheading
} from './styles';

import Helmet from 'react-helmet';

// Import Bootstrap components.
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Lazy-load components
const Bar = React.lazy(() => import('./components/Bar'));
const DevBar = React.lazy(() => import('./components/DevBar'));
const FursonaPicture = React.lazy(() => import('./components/FursonaPicture'));
const AbuseIPDBBadge = React.lazy(() => import('./components/AbuseIPDBBadge'));
const ProjectCard = React.lazy(() => import('./components/ProjectCard'));

class Home extends Component {
    render() {
        return (
            <>
                <Helmet bodyAttributes={{
                    style: 'background-color: #2B2B2B'
                }} />

                {
                    /* Striped bar in development/test */
                    process.env.NODE_ENV === 'development' ||
                    process.env.NODE_ENV === 'test' ? 
                        <DevBar text={"dev build"} /> 
                        : ''
                }

                <Bar />
                <Container>
                    <Row>
                        <Col sm>
                            <FursonaPicture image={DummyPicture} />
                            <h1 css={Heading}>
                                👋 Hey, I'm Reed.
                            </h1>
                            <p css={Subheading}>
                                I'm a developer of sorts.
                            </p>
                        </Col>
                        <Col lg css={css`
                            margin-top: 30px;
                        `}>
                            <ProjectCard
                                projectBackgroundColor={"#7089DB"}
                                projectDescriptionBackgroundColor={"#9BAFAF"}
                                projectTextColor={"#2E3228"}
                                projectName={"Bearbot"}
                                projectDescription={"Test card"}
                                projectImage={DummyPicture}
                                githubUrl={"https://github.com/Bearbot/Bearbot"}
                            />
                        </Col>
                    </Row>
                </Container>

                { /* <AbuseIPDBBadge uid={19066} /> */ }
            </>
        )
    }
}

export default Home;