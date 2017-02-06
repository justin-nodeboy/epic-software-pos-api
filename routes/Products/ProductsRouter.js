/**
 * Copyright (c) 2017, Justin Howard.
 * Licensed under the MIT License.
 */

const express = require('express');
const router = express.Router();
const ProductsController = require("../../controllers/ProductsController");

router.route('/')
    .get(ProductsController.returnAllProducts)
    .post(ProductsController.createNewProduct);

module.exports = router;
