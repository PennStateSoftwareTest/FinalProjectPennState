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
describe("functional test CreateAccount", function () {

  it("should test the userService.createUser function", function (done) {
    chai.request(server)
    .post('/api/user')
    .send({"firstName":"foo","lastName":"bar","email":"foo@bar.com","accountType":"Band Manager","password":"foobar"})
    .end(function(err, res){
        console.log(res.body);
        expect(res).to.have.status(200);

    //  chai.request(server).post("/api/user/delete").send("foo@bar.com").end(function(err, res){
    //      expect(res).to.have.status(200);
    //  });;
      done();
    })
  })
});

chai.use(sinonChai);

describe("userService Unit Test", function () {
    it("should return 400 - duplicate user", function () {
      chai.request(server)
      .post('/api/user')
      .send({"firstName":"foo","lastName":"bar","email":"foo@bar.com","accountType":"Band Manager","password":"foobar"})
      .end(function(err, res){
        console.log(res.body);
        expect(res).to.have.status(400);
        done();
      })
//returning the user
    });
});

describe("userService delete unit test", function(){
  it("should return 200 - deleted account with email foo@bar.com", function(){
    chai.request(server)
    .post("/api/user/delete")
    .send({"email":"foo@bar.com"})
    .end(function(err, res){

      console.log(res.body);
      expect(res).to.have.status(200);
    });
    done();

  });

});
