"use strict";
var chai = require("chai");
var chaiHttp = require('chai-http');
var SuperT = require('supertest');
process.env.NODE_ENV = "test";
//var sinon = require("sinon");
//var sinonChai = require("sinon-chai");
var expect = chai.expect;
var server = require("../../server.js");
chai.use(chaiHttp);

var venue1 = require('mongoose').model('Venue');
var venueService1 = require('../../server/services/venueService.js');
describe("functional test CreateVe", function () {

  beforeEach(function(done){
    //user1.remove();
  venue1.collection.drop();
  done();

  });

    it("should test the venueService.createVenue function", function (done) {
      chai.request(server)
      .post('/api/venue')
      .send({"venueName":"foo","address":"100 bar street","city":"city","state":"WV","zipcode":"22222"})
      .end(function(err, res){
        //  console.log(res.body);
          expect(res).to.have.status(200);
          done();
      });
    });
    afterEach(function(done){
      venue1.collection.drop();
    //  user1.remove();
      done();
    });
});

//chai.use(sinonChai);

// describe("Venue Service Prevent Duplicate Venues Test", function () {
//     beforeEach(function(done){
//       //user1.remove();
//      user1.collection.drop();
//       chai.request(server)
//       .post('/api/user')
//       .send({"firstName":"foo","lastName":"bar","email":"foo@bar.com","accountType":"Band Manager","password":"foobar"})
//       .end(function(err, res){
//         done();
//       })
//        done();
//     });
//     it("should return 400 - duplicate venue", function () {
//       chai.request(server)
//       .post('/api/user')
//       .send({"firstName":"foo","lastName":"bar","email":"foo@bar.com","accountType":"Band Manager","password":"foobar"})
//       .end(function(err, res){
//       //  console.log(res.body);
//         expect(res).to.have.status(400);
//         done();
//       })
// //returning the user
//     });
//     afterEach(function(done){
//         user1.collection.drop();
//         done();
//     });
// });

// describe("userService delete unit test", function(){
//   beforeEach(function(done){
//     //user1.remove();
//   // user1.collection.drop();
//     chai.request(server)
//     .post('/api/user')
//     .send({"firstName":"foo","lastName":"bar","email":"foo@bar.com","accountType":"Band Manager","password":"foobar"})
//     .end(function(err, res){
//       done();
//     })
//
//      done();
//   });
//   it("should return 200 - deleted account with email foo@bar.com", function(){
//   //  chai.use(SuperT);
//     SuperT(server).del("/api/user/delete?email="+encodeURIComponent("foo@bar.com"))
//      //.type('form')
//   // .send({'email' : 'foo@bar.com'})
//       .end(function(err, res){
//
//     //  console.log(res.body);
//       expect(res).to.have.status(200);
//         done();
//     })

  //
  // });

//});
