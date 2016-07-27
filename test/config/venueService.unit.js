"use strict";
var chai = require("chai");
var chaiHttp = require('chai-http');
// var SuperT = require('supertest');
process.env.NODE_ENV = "test";
//var sinon = require("sinon");
//var sinonChai = require("sinon-chai");
var expect = chai.expect;
var server = require("../../server.js");
chai.use(chaiHttp);

var venue1 = require('mongoose').model('Venue');
var venueService1 = require('../../server/services/venueService.js');

describe("functional test CreateVenue", function () {

  before(function(done){
    //user1.remove();
  venue1.collection.drop();
  venue1.ensureIndexes();
  done();

  });

    it("should test the venueService.createVenue function", function (done) {
      chai.request(server)
      .post('/api/venue')
      .send({"venueName":"foo","address":"100 bar street","city":"city","state":"WV","zipcode":"22222","ownerships":[{"foreignId":"577ed9ae29204d7d152319cc","criteria":[]}]})
      .end(function(err, res){
        //  console.log(res.body);
          expect(res).to.have.status(200);
          done();
      });
    });
    it("should test the venueService.createVenue function", function (done) {
      chai.request(server)
      .post('/api/venue')
      .send({"venueName":"foooy"})
      .end(function(err, res){
        //  console.log(res.body);
          expect(res).to.have.status(400);
          done();
      });
    });
    after(function(done){
      venue1.collection.drop();
    //  user1.remove();
      done();
    });
});

describe("Test Get All Venue Function", function () {

  before(function(done){
    //user1.remove();
  venue1.collection.drop();
  venue1.ensureIndexes();
  chai.request(server)
    .post('/api/venue')
    .send({"venueName":"foo","address":"100 bar street","city":"city","state":"WV","zipcode":"22222","ownerships":[{"foreignId":"577ed9ae29204d7d152319cc","criteria":[]}]})
    .end(function(err, res){
       done();
    })

  });
  it("Expect get all venues", function (done) {
    this.timeout(3000);
    chai.request(server)
    .get('/api/venue')
    .query({userId: '577ed9ae29204d7d152319cc'})
    .end(function(err, res){
      //console.log(res);
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        done();
    });
  });

  it("Expect error 500 get all venues", function (done) {
    this.timeout(3000);
    chai.request(server)
    .get('/api/venue')
    .query({userId: '30'})
    .end(function(err, res){
      //console.log(res);
        expect(res).to.have.status(500);

        done();
    });
  });

  after(function(done){
    venue1.collection.drop();
  //  user1.remove();
    done();
  });
});

describe("Test put venue ownership criteria", function () {

  before(function(done){
    //user1.remove();
  venue1.collection.drop();
  venue1.ensureIndexes();
  chai.request(server)
    .post('/api/venue')
    .send({"_id":"577ed9ae29204d7d152319cc","venueName":"foo","address":"100 bar street","city":"city","state":"WV","zipcode":"22222","ownerships":[{"foreignId":"577ed9ae29204d7d152319cc","criteria":[]}]})
    .end(function(err, res){
       done();
    })

  });

    it("should test the venueService.putOwnershipCriteria function with returning an error 500", function (done) {
      chai.request(server)
      .put('/api/venue/:venueId/ownership/:foreignId/criteria')
      .query({venueId:"123",foreignId:"577ed9ae29204d7d152319cc"})
      // .send({[{key: "genre", value: "Acoustic", _id: "57956fdbc5885016000241da"}]})
      .end(function(err, res){
        console.log(res.body);
          expect(res).to.have.status(500);
          done();
      });
    });

    it("should test the venueService.putOwnershipCriteria function with returning status 200", function (done) {
      chai.request(server)
      .put('/api/venue/:venueId/ownership/:foreignId/criteria')
      .query({venueId:"577ed9ae29204d7d152319cc",foreignId:"577ed9ae29204d7d152319cc"})
      .send({"key": "genre", "value": "Acoustic", "_id": "57956fdbc5885016000241da"})
      .end(function(err, res){
        //  console.log(res.body);
          expect(res).to.have.status(200);
          done();
      });
    });

    after(function(done){
      venue1.collection.drop();
    //  user1.remove();
      done();
    });
});
