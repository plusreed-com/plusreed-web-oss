import React, { Component } from 'react';
import { Global, css } from '@emotion/core';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import {
    Heading,
    Subheading
} from './styles';

import Helmet from 'react-helmet';

// Dummy image
import * as DummyPicture from './assets/images/dummy.png';

// Routes
import Projects from '../Projects';

// Import Bootstrap components.
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Lazy-load components
const Bar = React.lazy(() => import('./components/Bar'));
const DevBar = React.lazy(() => import('./components/DevBar'));
const FursonaPicture = React.lazy(() => import('./components/FursonaPicture'));
const AbuseIPDBBadge = React.lazy(() => import('./components/AbuseIPDBBadge'));

const HomePage = () => (
    <>
        <h1>Home</h1>
    </>
);

class Home extends Component {
    render() {
        return (
            <>
                <Global 
                    styles={css`
                        @import url('https://fonts.googleapis.com/css?family=Roboto');

                        head, body {
                            margin: 0;
                            padding: 0;
                        }
                    `}
                />
                <Helmet 
                    bodyAttributes={{
                        style: 'background-color: #2B2B2B'
                    }}
                />

                {
                    /* Striped bar in development/test */
                    process.env.NODE_ENV === 'development' ||
                    process.env.NODE_ENV === 'test' ? 
                        <DevBar text={"dev build"} /> 
                        : ''
                }

                <Bar />
                <Router>
                    <Container>
                        <Row>
                            <Col sm>
                                {/* Small Col */}
                                <FursonaPicture image={DummyPicture} />
                                <h1 css={Heading}>
                                    👋 Hey, I'm Reed.
                                </h1>
                                <p css={Subheading}>
                                    I'm a developer of sorts.
                                </p>
                                <Link 
                                    to="/"
                                    css={css`
                                        padding-left: 30px;
                                    `}
                                >
                                    Home
                                </Link>
                                <br />
                                <Link 
                                    to="/projects"
                                    css={css`
                                        padding-left: 30px;
                                    `}
                                >
                                    Projects
                                </Link>
                                {/* <AbuseIPDBBadge uid={19066} /> */}
                            </Col>
                            <Col lg css={css`
                                margin-top: 30px;
                            `}>
                                {/* Large Col */}
                                <Route path="/" exact component={HomePage} />
                                <Route path="/projects" component={Projects} />
                            </Col>
                        </Row>
                    </Container>
                </Router>
            </>
        )
    }
}

export default Home;