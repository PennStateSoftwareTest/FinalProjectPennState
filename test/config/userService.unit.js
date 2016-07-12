"use strict";
var chai = require("chai");
var chaiHttp = require('chai-http');
process.env.NODE_ENV = "test";
//var sinon = require("sinon");
//var sinonChai = require("sinon-chai");
var expect = chai.expect;
var server = require("../../server.js");
var   encrypt = require('../../server/common/encryption');
chai.use(chaiHttp);

var user1 = require('mongoose').model('User');
var userService1 = require('../../server/services/userService.js');
describe("functional test CreateAccount", function () {

  before(function(done){
    //user1.remove();
    user1.collection.drop();
    done();

    //done();
  });

    it("should test the userService.createUser function", function (done) {
      chai.request(server)
      .post('/api/user')
      .send({"firstName":"foo","lastName":"bar","email":"foo@bar.com","accountType":"Band Manager","password":"foobar"})
      .end(function(err, res){
        //  console.log(res.body);
          expect(res).to.have.status(200);
          done();
      //  chai.request(server).post("/api/user/delete").send("foo@bar.com").end(function(err, res){
      //      expect(res).to.have.status(200);
      //  });;
      //  done();
      })
    });
    // it("should return 400 - duplicate user", function (done) {
    //   chai.request(server)
    //   .post('/api/user')
    //   .send({"firstName":"foo","lastName":"bar","email":"foo@bar.com","accountType":"Band Manager","password":"foobar"})
    //   .end(function(err, res){
    //   //  console.log(res.body);
    //       expect(res).to.have.status(400);
    //     done();
    //   })
//returning the user
  //  });
    after(function(done){
      user1.collection.drop();
    //  user1.remove();
      done();
    });
});

//chai.use(sinonChai);

describe("Test to prevent duplicate user", function () {
    before(function(done){
      user1.collection.drop();

      done();
    });
    it("should return 400 - duplicate user", function (done) {
    var salt = encrypt.createSalt();
    var password_hash = encrypt.hashPassword(salt, "foobar");
      user1.create({"firstName":"foo","lastName":"bar","email":"foo@bar.com","accountType":"Band Manager","password":"foobar", "password_hash":password_hash, "salt":salt}, function(error, user){
        console.log(error);
        console.log(user);
        chai.request(server)
        .post('/api/user')
        .send({"firstName":"foo","lastName":"bar","email":"foo@bar.com","accountType":"Band Manager","password":"foobar"})
        .end(function(err, res){
        //  console.log(res.body);
          expect(res).to.have.status(400);
          done();
        })
      });
      // chai.request(server)
      // .post('/api/user')
      // .send({"firstName":"foo","lastName":"bar","email":"foo@bar.com","accountType":"Band Manager","password":"foobar"});

//returning the user
    });
    after(function(done){
        user1.collection.drop();
         done();
    });
});

 describe("userService delete unit test", function(){
   beforeEach(function(done){
     chai.request(server)
     .post('/api/user')
     .send({"firstName":"foo","lastName":"bar","email":"foo@bar.com","accountType":"Venue Manager","password":"foobar"})
     .end(function(err, res){
        done();
     })

   });
   it("should return 200 - deleted account with email foo@bar.com", function(){
       chai.request(server)
           .delete('/api/user')
           .send({"email":"foo@bar.com"})
           .end(function(err, res){
               expect(res).to.have.status(200);
           });
   });

 });
