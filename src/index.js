import React from 'react';
import ReactDOM from 'react-dom';
import DataProvider from './contexts/dataContext';
import App from './components/App';
import "./i18nextConf";
import './styles/variables.css';
import './styles/global.css';

const root = document.getElementById('root');

const jsx = (
    <DataProvider>
        <App />
    </DataProvider>
);

ReactDOM.render(jsx, root);
