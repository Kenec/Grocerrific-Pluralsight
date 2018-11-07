import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackDevConfig from '../webpack.config.dev';


const app  = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let compiler;

if (process.env.NODE_ENV !== 'production') {
  compiler = webpack(webpackDevConfig);
  app.use(webpackHotMiddleware(compiler));
} else {
  // compiler = webpack(prodConfig);
}

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackDevConfig.output.publicPath
}));

app.get('*', (req, res) => {
  res.sendFile(path.resolve('./client/index.html'));
});

app.listen(process.env.PORT || 3000);


