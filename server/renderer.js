import React from "react";
import { renderToString } from 'react-dom/server';
import { Provider } from "react-redux";
// import { renderRoutes } from "react-router-config";
import { StaticRouter } from 'react-router-dom/server';
import serializeJavascript from "serialize-javascript";
import Routes from "../src/components/Routes";

export default (req, store) => {
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} context={{}} >
                <Routes />
                {/* <div>{renderRoutes(Routes)}</div> */}
                {/* <Routes /> */}
            </StaticRouter>
        </Provider>
    );

    return `
        <html>
            <head>
                <link rel="icon" href="images/favicon.ico"/>
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
