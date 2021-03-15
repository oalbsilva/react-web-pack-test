import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';


const init = () => ReactDOM.render(<Home />, document.getElementById('app'));

window.init = init;