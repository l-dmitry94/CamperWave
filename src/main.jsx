import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from 'components/App';

import { store } from './redux/store';

import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter basename="/CamperWave">
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
