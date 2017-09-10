const express = require('express')
const path = require("path");
const exphbs = require('express-handlebars');
const livereload = require('express-livereload');
const webpackConf = require('../webpack.config');

const app = express()
livereload(app,{
    watchDir:webpackConf.output.path
});
app.engine('handlebars', exphbs() );
app.set("views", __dirname);
app.set('view engine', 'handlebars');
app.use("/app.bundle.js",express.static(path.resolve(__dirname,'../dist/app.bundle.js')));

app.get('/', (req, res)=> res.render('index.hbs') );

app.listen(9000);