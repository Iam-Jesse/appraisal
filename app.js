const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const ejs = require('ejs');
const path = require('path');

const routes = require('./routes');
const { dirname } = require('path');

app.set('views', 'views');
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

app.listen(process.env.PORT || 3000, ()=>{
    console.log('server is listening');
});