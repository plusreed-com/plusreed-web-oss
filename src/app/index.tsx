import React, { Component, Suspense } from 'react';
import Home from './Home';

class App extends Component {
    render() {
        return (
            // This is temporary while I make a decent fallback UI.
            <Suspense fallback={<h1>Loading...</h1>}>
                <Home />
            </Suspense>
        )
    }
}

export default App;