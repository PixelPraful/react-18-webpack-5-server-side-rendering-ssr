import React from "react";

const App = () => {
    return (
        <div>
            <div>App Component</div>
            <button onClick={() => console.log('Hey!')}>Press me!</button>
        </div>
    );
};

export default {
    element: App,
};
