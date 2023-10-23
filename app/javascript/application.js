import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './components/Greeting';

function App() {
  return (<Greeting />);
}

ReactDOM.render(
  <App/>,
  document.getElementById('root'),
);