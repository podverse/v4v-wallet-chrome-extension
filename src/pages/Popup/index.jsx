import React from 'react'
import { render } from 'react-dom';

import '../../styles/index';
import Popup from './Popup';
import './index.scss';

render(<Popup />, window.document.querySelector('#app-container'));

if (module.hot) module.hot.accept();
