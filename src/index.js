import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import App from './App';
import {HashRouter} from 'react-router-dom';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'


ReactDOM.render(
  <HashRouter basename="/">
    <DndProvider backend={HTML5Backend}>
      <App />
    </DndProvider>
  </HashRouter>,
  document.getElementById('root')
);
