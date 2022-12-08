import React from "react";
import { renderToString } from 'react-dom/server';
import { Helmet } from "react-helmet";
import { Provider } from "react-redux";
// import { renderRoutes } from "react-router-config";
import { StaticRouter } from 'react-router-dom/server';
import serializeJavascript from "serialize-javascript";
import Routes from "../src/components/Routes";
import HttpContext from "./httpContext";

export default (req, store, context) => {
    const staticContext = { staticContext: context };
    const content = renderToString(
        <Provider store={store}>
            <HttpContext.Provider value={staticContext}>
                <StaticRouter location={req.path} >
                    <Routes />
                    {/* <div>{renderRoutes(Routes)}</div> */}
                    {/* <Routes /> */}
                </StaticRouter>
            </HttpContext.Provider>
        </Provider>
    );

    const helmet = Helmet.renderStatic();

    return `
        <html>
            <head>
                ${helmet.title.toString()}
                ${helmet.meta.toString()}
                <link rel="icon" href="images/favicon.ico"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
            </head>
            <body>
                <div id="root">${content}</div>
                <script>
                    window.INITIAL_STATE = ${serializeJavascript(store.getState())}
                </script>
                <script src="/bundle.js"></script>
            </body>
        </html>
    `;
};
