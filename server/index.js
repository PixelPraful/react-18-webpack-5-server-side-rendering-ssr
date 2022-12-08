// import 'babel-polyfill';  // Required for async await 
import express from 'express';
import proxy from 'express-http-proxy';
import { matchRoutes } from 'react-router-dom';
import { routesArray } from '../src/components/RoutesData';
import createStore from './createStore';
import renderer from './renderer';

const app = express();

app.use('/api', proxy('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator(opts) {
        opts.headers['x-forwarded-host'] = 'localhost:4444';
        return opts;
    }
}));

app.use(express.static('public'));
app.get('*', (req, res) => {
    const store = createStore(req);

    // Logic to intialize and load data in the store
    // console.log(matchRoutes(routesArray, req.path));
    const promises = matchRoutes(routesArray, req.path).map(({ route }) => {
        return route?.loadData ? route?.loadData(store) : null;
    }).map((promise) => {
        if (promise) {
            return new Promise((resolve, reject) => {
                promise.then(resolve).catch(resolve);
            });
        }
    });
    // console.log(promises);
    Promise.all(promises).then(() => {
        const context = {};
        const content = renderer(req, store, context);
        console.log(context);
        if (context.url) {
            res.redirect(301, context.url);
        }
        if (context.notFound) {
            res.status(404);
        }
        res.send(content);
    });
});

app.listen(4444, () => {
    console.log('Listening on PORT 4444')
});