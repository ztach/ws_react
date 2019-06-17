import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Gra from './component/Gra/index';
//import Menu from './component/Menu/Menu'
//import App from './App';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Gra />, document.getElementById('gra'));


serviceWorker.unregister();
