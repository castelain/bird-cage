import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { configure } from 'mobx';

ReactDOM.render(<App />, document.getElementById('root'));

// 严格模式的开启
configure({
    enforceActions: "observed"
});


serviceWorker.unregister();
