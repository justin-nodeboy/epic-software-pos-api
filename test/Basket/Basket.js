/**
 * Copyright (c) 2017, Justin Howard.
 * Licensed under the MIT License.
 */

const chai = require('chai');
const chaiHttp = require('chai-http');
const chaiSubset = require('chai-subset');
const expect = require("chai").expect;
const Basket = require("../../models/Basket");
const should = chai.should();

chai.use(chaiHttp);
chai.use(chaiSubset);


describe("Baskets", () => {

    it("should create a new basket object", (done) => {
        const safeBasket = {
            "basketUserGuid": "510",
            "basketCreatedDate": new Date("2017-01-01T00:00:00+0000"),
            "basketContents": [
                {
                    "productID": "1"
                }
            ],
            "basketTotal": 200,
            "basketSessionToken": "123"
        };

        const newBasket = new Basket(safeBasket);
        expect(newBasket).to.containSubset(safeBasket);
        done();
    });

    it("should throw an error when the basketUserGuid is not a string", (done) => {
        const badBasket = {
            "basketUserGuid": 510,
            "basketCreatedDate": new Date("2017-01-01T00:00:00+0000"),
            "basketContents": [
                {
                    "productID": "1"
                }
            ],
            "basketTotal": 200,
            "basketSessionToken": "123"
        };
        expect(() => new Basket(badBasket)).to.throw(Error, 'The basket guid must be a string');
        done();
    });

    it("should throw an error when missing basket session token", (done) => {
        const badBasket = {
            "basketUserGuid": "510",
            "basketCreatedDate": new Date("2017-01-01T00:00:00+0000"),
            "basketContents": [
                {
                    "productID": "1"
                }
            ],
            "basketTotal": 200
        };
        expect(() => new Basket(badBasket)).to.throw(Error, 'basketSessionToken is required');
        done();
    });

    it("should throw an error when the basketSessionToken is not a string", (done) => {
        const badBasket = {
            "basketUserGuid": "510",
            "basketCreatedDate": new Date("2017-01-01T00:00:00+0000"),
            "basketContents": [
                {
                    "productID": "1"
                }
            ],
            "basketTotal": 200,
            "basketSessionToken": 123
        };
        expect(() => new Basket(badBasket)).to.throw(Error, 'The basket session token must be a string');
        done();
    });

    it("should throw an error when missing basket contents", (done) => {
        const badBasket = {
            "basketUserGuid": "510",
            "basketCreatedDate": new Date("2017-01-01T00:00:00+0000"),
            "basketTotal": 200,
            "basketSessionToken": "123"
        };
        expect(() => new Basket(badBasket)).to.throw(Error, 'basketContents is required');
        done();
    });

    it("should throw an error when the basketContents does not contain at least 1 item", (done) => {
        const badBasket = {
            "basketUserGuid": "510",
            "basketCreatedDate": new Date("2017-01-01T00:00:00+0000"),
            "basketContents": [],
            "basketTotal": 200,
            "basketSessionToken": "123"
        };
        expect(() => new Basket(badBasket)).to.throw(Error, 'There must be at least 1 item in the basket');
        done();
    });

    it("should throw an error when missing basket total", (done) => {
        const badBasket = {
            "basketUserGuid": "510",
            "basketCreatedDate": new Date("2017-01-01T00:00:00+0000"),
            "basketContents": [
                {
                    "productID": "1"
                }
            ],
            "basketSessionToken": "123"
        };
        expect(() => new Basket(badBasket)).to.throw(Error, 'A basketTotal is required');
        done();
    });

    it("should throw an error when missing basket total is not a number", (done) => {
        const badBasket = {
            "basketUserGuid": "510",
            "basketCreatedDate": new Date("2017-01-01T00:00:00+0000"),
            "basketContents": [
                {
                    "productID": "1"
                }
            ],
            "basketTotal": "Hello world",
            "basketSessionToken": "123"
        };
        expect(() => new Basket(badBasket)).to.throw(Error, 'The basket total must be a number');
        done();
    });

    it("should throw an error when missing basket created date", (done) => {
        const badBasket = {
            "basketUserGuid": "510",
            "basketContents": [
                {
                    "productID": "1"
                }
            ],
            "basketTotal": 200,
            "basketSessionToken": "123"
        };
        expect(() => new Basket(badBasket)).to.throw(Error, 'basketCreatedDate is required');
        done();
    });

    it("should throw an error when basket created date is not a date", (done) => {
        const badBasket = {
            "basketUserGuid": "510",
            "basketCreatedDate": false,
            "basketContents": [
                {
                    "productID": "1"
                }
            ],
            "basketTotal": 200,
            "basketSessionToken": "123"
        };
        expect(() => new Basket(badBasket)).to.throw(Error, 'basketCreatedDate must be a date');
        done();
    });


});
