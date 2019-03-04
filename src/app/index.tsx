import React, { Component, Suspense } from 'react';
import { css, Global } from '@emotion/core';
import Helmet from 'react-helmet';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Import Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Lazy-load components
const Bar = React.lazy(() => import('./components/Bar'));
const DevBar = React.lazy(() => import('./components/DevBar'));
const Sidebar = React.lazy(() => import('./components/Sidebar'));

// Lazy-load routes
const About = React.lazy(() => import('./pages/About'));
const Projects = React.lazy(() => import('./pages/Projects'));

class App extends Component {
    render() {
        return (
            /**
             * @todo Make a better fallback UI.
             */
            <Suspense fallback={<h1>Loading...</h1>}>
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
                    <Container fluid>
                        <Row>
                            <Col xs={3}>
                                {/* Small Col */}
                                <Sidebar />
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
                                <Route path="/" exact component={About} />
                                <Route path="/projects" component={Projects} />
                            </Col>
                        </Row>
                    </Container>
                </Router>
            </Suspense>
        )
    }
}

export default App;