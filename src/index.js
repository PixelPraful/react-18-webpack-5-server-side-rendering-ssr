// import 'babel-polyfill';  // Required for async await 
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import Routes from "./components/Routes";
import reducers from './reducers';
import axios from "axios";
// import { renderRoutes } from "react-router-config";

const axiosInstance = axios.create({
    baseURL: '/api',
});
const store = createStore(reducers, window.INITIAL_STATE, applyMiddleware(thunk.withExtraArgument(axiosInstance)));

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes />
            {/* <div>{renderRoutes(Routes)}</div> */}
            {/* <Routes /> */}
        </BrowserRouter>
    </Provider>
);