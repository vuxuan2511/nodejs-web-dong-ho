import express from 'express';
import bodyParser from 'body-parser';
import viewEngine from './configs/viewEngine';
import initWebRoute from './route/web';
require('dotenv').config();

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
viewEngine(app);
initWebRoute(app);

let port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log('backend nodejs is running in the port:' + port);
});
