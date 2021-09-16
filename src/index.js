import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'


ReactDOM.render(
  <Router basename="/">
    <DndProvider backend={HTML5Backend}>
      <App />
    </DndProvider>
  </Router>,
  document.getElementById('root')
);
