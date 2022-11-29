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
        opts.header['x-forwarded-host'] = 'localhost:4444';
        return opts;
    }
}));
app.use(express.static('public'));
app.get('*', (req, res) => {
    const store = createStore();

    // Logic to intialize and load data in the store
    // console.log(matchRoutes(routesArray, req.path));
    const promises = matchRoutes(routesArray, req.path).map(({ route }) => {
        return route?.loadData ? route?.loadData(store) : null;
    });
    // console.log(promises);
    Promise.all(promises).then(() => {
        res.send(renderer(req, store));
    });
});

app.listen(4444, () => {
    console.log('Listening on PORT 4444')
});