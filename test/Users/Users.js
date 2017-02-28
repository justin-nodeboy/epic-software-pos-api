/**
 * Copyright (c) 2017, Justin Howard.
 * Licensed under the MIT License.
 */

const chai = require('chai');
const chaiSubset = require('chai-subset');
const expect = require("chai").expect;
const User = require("../../models/User");
const should = chai.should();

chai.use(chaiSubset);

describe("Users", () => {
    it("should create a new user object", (done) => {
        const safeUser = {
            "password": "test",
            "firstName": "John",
            "lastName": "Appleseed",
            "fullName": "John Appleseed",
            "email": "test@test.com",
            "phone": 0o1273123456,
            "joinDate": new Date("2017-01-01T00:00:00+0000"),
            "type": 1
        };

        const newUser = new User(safeUser);
        expect(newUser).to.containSubset(safeUser);
        done();
    });

    it("should throw an error when missing password", (done) => {
        const badUser = {
            "firstName": "John",
            "lastName": "Appleseed",
            "fullName": "John Appleseed",
            "email": "test@test.com",
            "phone": 0o1273123456,
            "joinDate": new Date("2017-01-01T00:00:00+0000"),
            "dateOfBirth": new Date("1980-01-01T00:00:00+0000"),
            "type": 1
        };
        expect(() => new User(badUser)).to.throw(Error, 'A password is required');
        done();
    });

    it("should throw an error when password is not a string", (done) => {
        const badUser = {
            "password": 1,
            "firstName": "John",
            "lastName": "Appleseed",
            "fullName": "John Appleseed",
            "email": "test@test.com",
            "phone": 0o1273123456,
            "joinDate": new Date("2017-01-01T00:00:00+0000"),
            "dateOfBirth": new Date("1980-01-01T00:00:00+0000"),
            "type": 1
        };
        expect(() => new User(badUser)).to.throw(Error, 'The password must be a string');
        done();
    });

    it("should throw an error when missing first name", (done) => {
        const badUser = {
            "password": "test",
            "lastName": "Appleseed",
            "fullName": "John Appleseed",
            "email": "test@test.com",
            "phone": 0o1273123456,
            "joinDate": new Date("2017-01-01T00:00:00+0000"),
            "dateOfBirth": new Date("1980-01-01T00:00:00+0000"),
            "type": 1
        };
        expect(() => new User(badUser)).to.throw(Error, 'A firstName is required');
        done();
    });

    it("should throw an error when first name is not a string", (done) => {
        const badUser = {
            "password": "test",
            "firstName": 1,
            "lastName": "Appleseed",
            "fullName": "John Appleseed",
            "email": "test@test.com",
            "phone": 0o1273123456,
            "joinDate": new Date("2017-01-01T00:00:00+0000"),
            "dateOfBirth": new Date("1980-01-01T00:00:00+0000"),
            "type": 1
        };
        expect(() => new User(badUser)).to.throw(Error, 'The firstName must be a string');
        done();
    });

    it("should throw an error when missing last name", (done) => {
        const badUser = {
            "password": "test",
            "firstName": "John",
            "fullName": "John Appleseed",
            "email": "test@test.com",
            "phone": 0o1273123456,
            "joinDate": new Date("2017-01-01T00:00:00+0000"),
            "dateOfBirth": new Date("1980-01-01T00:00:00+0000"),
            "type": 1
        };
        expect(() => new User(badUser)).to.throw(Error, 'A lastName is required');
        done();
    });

    it("should throw an error when last name is not a string", (done) => {
        const badUser = {
            "password": "test",
            "firstName": "John",
            "lastName": 1,
            "fullName": "John Appleseed",
            "email": "test@test.com",
            "phone": 0o1273123456,
            "joinDate": new Date("2017-01-01T00:00:00+0000"),
            "dateOfBirth": new Date("1980-01-01T00:00:00+0000"),
            "type": 1
        };
        expect(() => new User(badUser)).to.throw(Error, 'The lastName must be a string');
        done();
    });

    it("should throw an error when missing full name", (done) => {
        const badUser = {
            "password": "test",
            "firstName": "John",
            "lastName": "Appleseed",
            "email": "test@test.com",
            "phone": 0o1273123456,
            "joinDate": new Date("2017-01-01T00:00:00+0000"),
            "dateOfBirth": new Date("1980-01-01T00:00:00+0000"),
            "type": 1
        };
        expect(() => new User(badUser)).to.throw(Error, 'A fullName is required');
        done();
    });

    it("should throw an error when full name is not a string", (done) => {
        const badUser = {
            "password": "test",
            "firstName": "John",
            "lastName": "Appleseed",
            "fullName": 1,
            "email": "test@test.com",
            "phone": 0o1273123456,
            "joinDate": new Date("2017-01-01T00:00:00+0000"),
            "dateOfBirth": new Date("1980-01-01T00:00:00+0000"),
            "type": 1
        };
        expect(() => new User(badUser)).to.throw(Error, 'The fullName must be a string');
        done();
    });

    it("should throw an error when missing email", (done) => {
        const badUser = {
            "password": "test",
            "firstName": "John",
            "lastName": "Appleseed",
            "fullName": "John Appleseed",
            "phone": 0o1273123456,
            "joinDate": new Date("2017-01-01T00:00:00+0000"),
            "dateOfBirth": new Date("1980-01-01T00:00:00+0000"),
            "type": 1
        };
        expect(() => new User(badUser)).to.throw(Error, 'A email is required');
        done();
    });

    it("should throw an error when email is not a string", (done) => {
        const badUser = {
            "password": "test",
            "firstName": "John",
            "lastName": "Appleseed",
            "fullName": "John Appleseed",
            "email": 1,
            "phone": 0o1273123456,
            "joinDate": new Date("2017-01-01T00:00:00+0000"),
            "dateOfBirth": new Date("1980-01-01T00:00:00+0000"),
            "type": 1
        };
        expect(() => new User(badUser)).to.throw(Error, 'The email must be a string');
        done();
    });

    it("should throw an error when missing phone", (done) => {
        const badUser = {
            "password": "test",
            "firstName": "John",
            "lastName": "Appleseed",
            "fullName": "John Appleseed",
            "email": "test@test.com",
            "joinDate": new Date("2017-01-01T00:00:00+0000"),
            "dateOfBirth": new Date("1980-01-01T00:00:00+0000"),
            "type": 1
        };
        expect(() => new User(badUser)).to.throw(Error, 'A phone is required');
        done();
    });

    it("should throw an error when phone is not a number", (done) => {
        const badUser = {
            "password": "test",
            "firstName": "John",
            "lastName": "Appleseed",
            "fullName": "John Appleseed",
            "email": "test@test.com",
            "phone": "01273123456",
            "joinDate": new Date("2017-01-01T00:00:00+0000"),
            "dateOfBirth": new Date("1980-01-01T00:00:00+0000"),
            "type": 1
        };
        expect(() => new User(badUser)).to.throw(Error, 'The phone must be a number');
        done();
    });

    it("should throw an error when missing joinDate", (done) => {
        const badUser = {
            "password": "test",
            "firstName": "John",
            "lastName": "Appleseed",
            "fullName": "John Appleseed",
            "email": "test@test.com",
            "phone": 0o1273123456,
            "dateOfBirth": new Date("1980-01-01T00:00:00+0000"),
            "type": 1
        };
        expect(() => new User(badUser)).to.throw(Error, 'joinDate is required');
        done();
    });

    it("should throw an error when joinDate is not a date", (done) => {
        const badUser = {
            "password": "test",
            "firstName": "John",
            "lastName": "Appleseed",
            "fullName": "John Appleseed",
            "email": "test@test.com",
            "phone": 0o1273123456,
            "joinDate": 5,
            "dateOfBirth": new Date("1980-01-01T00:00:00+0000"),
            "type": 1
        };
        expect(() => new User(badUser)).to.throw(Error, 'joinDate must be a date');
        done();
    });

    it("should throw an error when missing type", (done) => {
        const badUser = {
            "password": "test",
            "firstName": "John",
            "lastName": "Appleseed",
            "fullName": "John Appleseed",
            "email": "test@test.com",
            "phone": 0o1273123456,
            "joinDate": new Date("2017-01-01T00:00:00+0000"),
            "dateOfBirth": new Date("1980-01-01T00:00:00+0000")
        };
        expect(() => new User(badUser)).to.throw(Error, 'A type is required');
        done();
    });

});
