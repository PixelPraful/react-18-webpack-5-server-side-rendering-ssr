import React, { useContext } from "react";
import HttpContext from "../../server/httpContext";
import { isBrowser } from "../utils";

const NotFoundPage = ({ staticContext = {} }) => {
    staticContext.notFound = true;
    let context = useContext(HttpContext);

    if (!isBrowser()) {
        context.staticContext.notFound = true;
    }
    return (
        <div className="center-align" style={{ marginTop: '200px' }}>
            <h1>Oops, route not found</h1>
        </div>
    );
};

export default {
    element: NotFoundPage,
};
