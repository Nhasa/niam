import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import 'moment/locale/id';
import App from './scripts/App';
import './styles/index.css';
import registerServiceWorker from './scripts/registerServiceWorker';

moment.locale('id');

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
