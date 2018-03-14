import React from 'react';
//Only need render method
import {render} from 'react-dom';
//Import Components
import StorePicker from './components/StorePicker'


//Render your components
render(<StorePicker/>, document.querySelector('#main'));