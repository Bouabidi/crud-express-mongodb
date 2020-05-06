var express = require('express');
var bodyParser = require('body-parser');
var app = express();


// Set up mongoose connection
var mongoose = require('mongoose');
let dev_db_url = 'mongodb://localhost:27017/crud-express-mongodb';
mongoose.connect(dev_db_url, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var product = require('./routes/product.route'); // Imports routes for the products
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);

app.listen(3000, function() {
    console.log('listening on 3000')
  })