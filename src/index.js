import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BooksContext, {Provider} from "./context/books";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


    <Provider>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
);


reportWebVitals();
