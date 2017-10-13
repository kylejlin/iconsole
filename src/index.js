import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import IConsole from './IConsole';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<IConsole />, document.getElementById('root'));
registerServiceWorker();
