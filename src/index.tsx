import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
import reportWebVitals from './reportWebVitals';
import { legacy_createStore as createStore } from 'redux';
import rootReducer from './modules';
import { Provider } from 'react-redux';
// import { composeWithDevTools } from 'redux-devtools-extension';


// const store = createStore(rootReducer, composeWithDevTools());
const store = createStore(rootReducer);
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
