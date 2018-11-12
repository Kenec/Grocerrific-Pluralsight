import express from 'express';
import path from 'path';
import webpack from 'webpack';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
// import compression from 'compression';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackDevConfig from '../webpack.config.dev';
import webpackProdConfig from '../webpack.config.prod';
import routes from './routes';

const app  = express();

let connectionString;

if (process.env.NODE_ENV === 'production') {
  connectionString = process.env.PROD_DATABASE_URL
} else if (process.env.NODE_ENV === 'test') {
  connectionString = process.env.TEST_DATA_URL
} else {
  connectionString = process.env.DEV_DATABASE_URL  
}

mongoose.connect(connectionString, { useNewUrlParser: true });
const db = mongoose.connection;

db.once('open', () => {
  console.log('We are connected!');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', routes);

let compiler;

if (process.env.NODE_ENV !== 'production') {
  compiler = webpack(webpackDevConfig);
  app.use(webpackHotMiddleware(compiler));
} else {
  compiler = webpack(webpackProdConfig);
}

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackDevConfig.output.publicPath
}));


if (process.env.NODE_ENV !== 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.resolve('./client/index.html'));
  });
} else {
  // app.use(compression());
  app.use(express.static('dist'));
  app.get('*', function(req, res) {
    res.sendFile(path.join( __dirname, '../dist/index.html'));
  });

}


app.listen(process.env.PORT || 3000);


