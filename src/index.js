import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "mobx-react";
import StateStore from "./stores/StateStore";
import DistrictStore from "./stores/DistrictStore";

const root = (
    <Provider
        StateStore = {StateStore}
        DistrictStore = {DistrictStore}>
        <App />
    </Provider>
);

ReactDOM.render(root, document.getElementById('root'));
registerServiceWorker();
