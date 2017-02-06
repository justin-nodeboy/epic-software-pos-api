/**
 * Copyright (c) 2017, Justin Howard.
 * Licensed under the MIT License.
 */

const express = require('express');
const router = express.Router();
const BasketController = require("../../controllers/BasketController");

router.route('/')
    .get(BasketController.returnAllBaskets)
    .post(BasketController.createNewBasket);

router.route('/:id')
    .get(BasketController.returnSingleBasket)
    .delete(BasketController.deleteSingleBasket)
    .put(BasketController.updateSingleBasket)
    .patch(BasketController.updateSingleBasket);

module.exports = router;

