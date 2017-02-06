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

router.route('/:id')
    .get(ProductsController.returnSingleProduct)
    .delete(ProductsController.deleteSingleProduct)
    .put(ProductsController.updateSingleProduct)
    .patch(ProductsController.updateSingleProduct);

module.exports = router;
