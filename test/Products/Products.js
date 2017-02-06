/**
 * Copyright (c) 2017, Justin Howard.
 * Licensed under the MIT License.
 */

const chai = require('chai');
const chaiHttp = require('chai-http');
const chaiSubset = require('chai-subset');
const expect = require("chai").expect;
const app = require("../../app");
const Product = require("../../models/Product");
const should = chai.should();

chai.use(chaiHttp);
chai.use(chaiSubset);


describe("Products", () => {

    it("should create a new product object", (done) => {
        const safeProduct = {
            "productName": "Painted Ampersand",
            "productDescription": "A delightful painted ampersand, with your choice of decoration",
            "productCreatedDate": new Date("2017-01-01T00:00:00+0000"),
            "productActive": true,
            "productFeatured": true,
            "productAttributes": [
                {
                    "colour": "Red",
                    "height": "14cm",
                    "width": "14cm",
                    "decoration": "Various small things"
                }
            ],
            "productPrice": 4500,
            "productStock": 10
        };

        const newProduct = new Product(safeProduct);
        expect(newProduct).to.containSubset(safeProduct);
        done();
    });

    it("should throw an error when missing product name", (done) => {
        const badProduct = {
            "productDescription": "A delightful painted ampersand, with your choice of decoration",
            "productCreatedDate": new Date("2017-01-01T00:00:00+0000"),
            "productActive": true,
            "productFeatured": true,
            "productAttributes": [
                {
                    "colour": "Red",
                    "height": "14cm",
                    "width": "14cm",
                    "decoration": "Various small things"
                }
            ],
            "productPrice": 4500,
            "productStock": 10
        };
        expect(() => new Product(badProduct)).to.throw(Error, 'productName is required');
        done();
    });

    it("should throw an error when the productName is not a string", (done) => {
        const badProduct = {
            "productName": 12,
            "productDescription": "A delightful painted ampersand, with your choice of decoration",
            "productCreatedDate": new Date("2017-01-01T00:00:00+0000"),
            "productActive": true,
            "productFeatured": true,
            "productAttributes": [
                {
                    "colour": "Red",
                    "height": "14cm",
                    "width": "14cm",
                    "decoration": "Various small things"
                }
            ],
            "productPrice": 4500,
            "productStock": 10
        };
        expect(() => new Product(badProduct)).to.throw(Error, 'The product name must be a string');
        done();
    });

    it("should throw an error when missing product description", (done) => {
        const badProduct = {
            "productName": "Painted Ampersand",
            "productCreatedDate": new Date("2017-01-01T00:00:00+0000"),
            "productActive": true,
            "productFeatured": true,
            "productAttributes": [
                {
                    "colour": "Red",
                    "height": "14cm",
                    "width": "14cm",
                    "decoration": "Various small things"
                }
            ],
            "productPrice": 4500,
            "productStock": 10
        };
        expect(() => new Product(badProduct)).to.throw(Error, 'productDescription is required');
        done();
    });

    it("should throw an error when the productDescription is not a string", (done) => {
        const badProduct = {
            "productName": "Painted Ampersand",
            "productDescription": false,
            "productCreatedDate": new Date("2017-01-01T00:00:00+0000"),
            "productActive": true,
            "productFeatured": true,
            "productAttributes": [
                {
                    "colour": "Red",
                    "height": "14cm",
                    "width": "14cm",
                    "decoration": "Various small things"
                }
            ],
            "productPrice": 4500,
            "productStock": 10
        };
        expect(() => new Product(badProduct)).to.throw(Error, 'The product description must be a string');
        done();
    });

    it("should throw an error when missing product created date", (done) => {
        const badProduct = {
            "productName": "Painted Ampersand",
            "productDescription": "A delightful painted ampersand, with your choice of decoration",
            "productActive": true,
            "productFeatured": true,
            "productAttributes": [
                {
                    "colour": "Red",
                    "height": "14cm",
                    "width": "14cm",
                    "decoration": "Various small things"
                }
            ],
            "productPrice": 4500,
            "productStock": 10
        };
        expect(() => new Product(badProduct)).to.throw(Error, 'productCreatedDate is required');
        done();
    });

    it("should throw an error when the productCreatedDate is not a date", (done) => {
        const badProduct = {
            "productName": "Painted Ampersand",
            "productDescription": "A delightful painted ampersand, with your choice of decoration",
            "productCreatedDate": false,
            "productActive": true,
            "productFeatured": true,
            "productAttributes": [
                {
                    "colour": "Red",
                    "height": "14cm",
                    "width": "14cm",
                    "decoration": "Various small things"
                }
            ],
            "productPrice": 4500,
            "productStock": 10
        };
        expect(() => new Product(badProduct)).to.throw(Error, 'productCreatedDate must be a date');
        done();
    });

    it("should throw an error when missing product active", (done) => {
        const badProduct = {
            "productName": "Painted Ampersand",
            "productDescription": "A delightful painted ampersand, with your choice of decoration",
            "productCreatedDate": new Date("2017-01-01T00:00:00+0000"),
            "productFeatured": true,
            "productAttributes": [
                {
                    "colour": "Red",
                    "height": "14cm",
                    "width": "14cm",
                    "decoration": "Various small things"
                }
            ],
            "productPrice": 4500,
            "productStock": 10
        };
        expect(() => new Product(badProduct)).to.throw(Error, 'A true/false value for productActive is required');
        done();
    });

    it("should throw an error when missing product featured", (done) => {
        const badProduct = {
            "productName": "Painted Ampersand",
            "productDescription": "A delightful painted ampersand, with your choice of decoration",
            "productCreatedDate": new Date("2017-01-01T00:00:00+0000"),
            "productActive": true,
            "productAttributes": [
                {
                    "colour": "Red",
                    "height": "14cm",
                    "width": "14cm",
                    "decoration": "Various small things"
                }
            ],
            "productPrice": 4500,
            "productStock": 10
        };
        expect(() => new Product(badProduct)).to.throw(Error, 'A true/false value for productFeatured is required');
        done();
    });

    it("should throw an error when missing product attributes", (done) => {
        const badProduct = {
            "productName": "Painted Ampersand",
            "productDescription": "A delightful painted ampersand, with your choice of decoration",
            "productCreatedDate": new Date("2017-01-01T00:00:00+0000"),
            "productActive": true,
            "productFeatured": true,
            "productPrice": 4500,
            "productStock": 10
        };
        expect(() => new Product(badProduct)).to.throw(Error, 'productAttributes is required');
        done();
    });

    it("should throw an error when product attributes are equal to 0", (done) => {
        const badProduct = {
            "productName": "Painted Ampersand",
            "productDescription": "A delightful painted ampersand, with your choice of decoration",
            "productCreatedDate": new Date("2017-01-01T00:00:00+0000"),
            "productActive": true,
            "productFeatured": true,
            "productAttributes": [],
            "productPrice": 4500,
            "productStock": 10
        };
        expect(() => new Product(badProduct)).to.throw(Error, 'There must be at least 1 attribute');
        done();
    });

    it("should throw an error when product price is missing", (done) => {
        const badProduct = {
            "productName": "Painted Ampersand",
            "productDescription": "A delightful painted ampersand, with your choice of decoration",
            "productCreatedDate": new Date("2017-01-01T00:00:00+0000"),
            "productActive": true,
            "productFeatured": true,
            "productAttributes": [
                {
                    "colour": "Red",
                    "height": "14cm",
                    "width": "14cm",
                    "decoration": "Various small things"
                }
            ],
            "productStock": 10
        };
        expect(() => new Product(badProduct)).to.throw(Error, 'A productPrice is required');
        done();
    });

    it("should throw an error when product price is not a number", (done) => {
        const badProduct = {
            "productName": "Painted Ampersand",
            "productDescription": "A delightful painted ampersand, with your choice of decoration",
            "productCreatedDate": new Date("2017-01-01T00:00:00+0000"),
            "productActive": true,
            "productFeatured": true,
            "productAttributes": [
                {
                    "colour": "Red",
                    "height": "14cm",
                    "width": "14cm",
                    "decoration": "Various small things"
                }
            ],
            "productPrice": "Hello World",
            "productStock": 10
        };
        expect(() => new Product(badProduct)).to.throw(Error, 'The product price must be a number');
        done();
    });

    it("should throw an error when product stock is missing", (done) => {
        const badProduct = {
            "productName": "Painted Ampersand",
            "productDescription": "A delightful painted ampersand, with your choice of decoration",
            "productCreatedDate": new Date("2017-01-01T00:00:00+0000"),
            "productActive": true,
            "productFeatured": true,
            "productAttributes": [
                {
                    "colour": "Red",
                    "height": "14cm",
                    "width": "14cm",
                    "decoration": "Various small things"
                }
            ],
            "productPrice": 4500
        };
        expect(() => new Product(badProduct)).to.throw(Error, 'A productStock is required');
        done();
    });

    it("should throw an error when product stock is not a number", (done) => {
        const badProduct = {
            "productName": "Painted Ampersand",
            "productDescription": "A delightful painted ampersand, with your choice of decoration",
            "productCreatedDate": new Date("2017-01-01T00:00:00+0000"),
            "productActive": true,
            "productFeatured": true,
            "productAttributes": [
                {
                    "colour": "Red",
                    "height": "14cm",
                    "width": "14cm",
                    "decoration": "Various small things"
                }
            ],
            "productPrice": 4500,
            "productStock": "Hello World"
        };
        expect(() => new Product(badProduct)).to.throw(Error, 'The product stock must be a number');
        done();
    });

});
