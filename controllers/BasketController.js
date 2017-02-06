/**
 * Copyright (c) 2017, Justin Howard.
 * Licensed under the MIT License.
 */
const BasketLib = require("../lib/BasketLib");
const Basket = require("../models/Basket");

const basketLib = new BasketLib();

class BasketController {

    /**
     * This method returns all active baskets
     */
    static returnAllBaskets(){
        basketLib.returnAllBaskets()
            .then(result => {
                arguments[1].status(200).send({success:result});
            })
            .catch(err => {
                arguments[1].status(500).send({error: err.message});
            });
    }

    /**
     * This method creates a new basket
     */
    static createNewBasket(){
        if (!arguments[0].body) return arguments[1].status(400).send({error:"Missing required fields"});
        basketLib.insertNew(new Basket(arguments[0].body))
            .then(() => {
                arguments[1].status(200).send({success:"A new basket has been created"});
            })
            .catch(err => {
                arguments[1].status(500).send({error: err.message});
            });
    }

    /**
     * This method returns a single basket
     */
    static returnSingleBasket(){
        basketLib.returnAllBaskets({_id: arguments[0].id})
            .then(result => {
                arguments[1].status(200).send({success:result});
            })
            .catch(err => {
                arguments[1].status(500).send({error: err.message});
            });
    }

    /**
     * This method deletes a basket
     */
    static deleteSingleBasket(){
        if (!arguments[0].params.id) return arguments[1].status(400).send({error:"Missing ID Parameter"});
        basketLib.removeSingleBasketBy(arguments[0].params.id)
            .then(() => {
                arguments[1].status(200).send({success:"Basket has been removed"});
            })
            .catch(err => {
                arguments[1].status(500).send({error: err.message});
            })
    }

    /**
     * This method updates a single basket
     */
    static updateSingleBasket(){
        if (!arguments[0].params.id) return arguments[1].status(400).send({error:"Missing ID Parameter"});
        basketLib.editBasketBy(arguments[0].params.id, arguments[0].body)
            .then(() => {
                arguments[1].status(200).send({success:"Basket has been updated"});
            })
            .catch(err => {
                arguments[1].status(500).send({error: err.message});
            })
    }

}

module.exports = BasketController;
