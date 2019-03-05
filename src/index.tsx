import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Fallback from './app/components/Fallback';
import * as serviceWorker from './serviceWorker';

const App = React.lazy(() => import('./app'));

ReactDOM.render(
    <Suspense fallback={<Fallback />}>
        <App />
    </Suspense>,
    document.querySelector('[data-react-root]') ||
    document.getElementById('app-mount')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
