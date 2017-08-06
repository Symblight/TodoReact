import path from 'path'
import express from 'express'
import mongoose from 'mongoose'
import MongoStore from 'connect-mongodb'
import session from 'express-session'
import cookieParser from 'cookie-parser'
import configApp from './config.json'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import noteApi from './server/routers/noteApi.js'
import webpack from 'webpack'
import webpackConfig from './webpack.config.js'
import WebpackDevMiddleware from 'webpack-dev-middleware'
import WebpackHotMiddleware from 'webpack-hot-middleware'

const app = express();
const compiler = webpack(webpackConfig);

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser(configApp.cookieSecret));

switch(app.get('env')){
	case 'development':
	mongoose.connect(configApp.development.connectString, { useMongoClient: true });
	break;
	case 'production':
	mongoose.connect(configApp.production.connectString, { useMongoClient: true });
	break;
	default:
	throw new Error('Error connecting db: '+ app.get('env'));
}
app.use(session({
    secret: configApp.cookieSecret,
    store: new MongoStore({
        url: `mongodb://User31:q1w2e3@${configApp.db.host}:${configApp.db.port}/${configApp.db.name}`
    })
}));
app.set('port', process.env.PORT || configApp.serverPort);
app.use(express.static(__dirname+'/public/'));
app.use(WebpackDevMiddleware(compiler,{
	stats:{
		colors: true,
        hash: false,
        timings: true,
        chunks: false,
        chunkModules: false,
        modules: false
	}
}));
app.use(WebpackHotMiddleware(compiler));
app.use('/', noteApi);

app.listen(app.get('port'), ()=>{
	console.log('Server is up!! adress: http:/localhost:'+app.get('port'));
});

export default app;