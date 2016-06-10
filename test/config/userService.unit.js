"use strict";
var chai = require("chai");
var chaiHttp = require('chai-http');
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
var server = require("../../server.js");
chai.use(chaiHttp);

var user1 = require('../../server/models/User.js');
var userService1 = require('../../server/services/userService.js');
describe("unit test CreateAccount - duplicate check", function () {

  it("should return 400 with correct form data sent twice", function (done) {
    chai.request(server)
    .post('/api/user')
    .send({"firstName":"foo","lastName":"bar","username":"foobarbaz","email":"foo@bar.com","accountType":"band","password":"foobar"})
    .send({"firstName":"foo","lastName":"bar","username":"foobarbaz","email":"foo@bar.com","accountType":"band","password":"foobar"})
    .end(function(err, res){
      console.log(res.body);
      expect(res).to.have.status(400);

      //res.should.be.json;
      //res.body.should.be.a('object');
      /*  res.body.should.have.property('SUCCESS');
      res.body.SUCCESS.should.be.a('object');
      res.body.SUCCESS.should.have.property('name');
      res.body.SUCCESS.should.have.property('lastName');
      res.body.SUCCESS.should.have.property('_id');
      res.body.SUCCESS.name.should.equal('Java');
      res.body.SUCCESS.lastName.should.equal('Script');  */
      done();
    })


  })
});
