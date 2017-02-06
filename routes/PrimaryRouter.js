/**
 * Copyright (c) 2017, Justin Howard.
 * Licensed under the MIT License.
 */
//Required Libs
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

//App
const app = require("../app");

//Routers
const IndexRouter = require('./Index/IndexRouter');
const UsersRouter = require('./Users/UsersRouter');
const ProductsRouter = require('./Products/ProductsRouter');

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Secure Routes
app.use('/users',UsersRouter);
app.use('/products', ProductsRouter);

//Insecure Routes
app.use('/', IndexRouter);

//Export Router
module.exports = router;


