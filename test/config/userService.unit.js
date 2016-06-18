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
describe("functional test CreateAccount - duplicate check", function () {

  it("should return 400 with correct form data sent twice", function (done) {
    chai.request(server)
    .post('/api/user')
    .send({"firstName":"foo","lastName":"bar","username":"foobarbaz","email":"foo@bar.com","accountType":"band","password":"foobar"})
    .send({"firstName":"foo","lastName":"bar","username":"foobarbaz","email":"foo@bar.com","accountType":"band","password":"foobar"})
    .end(function(err, res){
      console.log(res.body);
      expect(res).to.have.status(400);

      done();
    })
  })
});

chai.use(sinonChai);

describe("userService Unit Test", function () {
    it("should test the userService.createUser function", function () {

  //var username = "userTest69";
  var newUser = userService1.createUser({"firstName":"foo","lastName":"bar","username":"foobarbaz","email":"foo@bar.com","accountType":"band","password":"foobar"});
  //var cb = sinon.spy();

  //function getSignupForm(name, cb) {
    //  cb("hello " + name)};

//  getSignupForm("foo", cb);
  expect(res).to.have.status(400);
        })
  //expect(newUser).to.have.been.calledWith("The server will respond with a 400");
      });
