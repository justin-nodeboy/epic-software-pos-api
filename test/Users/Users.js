/**
 * Copyright (c) 2017, Justin Howard.
 * Licensed under the MIT License.
 */

const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const app = require("../../app");

chai.use(chaiHttp);

describe("Users", () => {
    it("should return all users", (done) => {
        chai.request(app)
            .get('/users')
            .end((err, res) => {
                if (!err) {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                }
            });
    });

});
