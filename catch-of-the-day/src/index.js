import React from 'react';
//Only need render method
import {render} from 'react-dom';
//Import Components
import Router from './components/Router';
import StorePicker from './components/StorePicker'
import App from './components/App'
//Import CSS
import './css/style.css';


//Render your components
render(<Router/>, document.querySelector('#main'));