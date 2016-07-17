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

var band1 = require('mongoose').model('Band');
var bandService1 = require('../../server/services/bandService.js');
describe("Test Create Band Function", function () {

  beforeEach(function(done){
    //user1.remove();
  band1.collection.drop();
  done();

  });

    it("should test the createBand function when it succeeds", function (done) {
      chai.request(server)
      .post('/api/band')
      .send({"bandName":"foo","bandAddress":"100 bar street","bandCity":"city","bandState":"WV","bandZip":"22222"})
      .end(function(err, res){
        //  console.log(res.body);
          expect(res).to.have.status(200);
          done();
      });
    });
    it("should test the createBand function when it fails", function (done) {
      chai.request(server)
      .post('/api/band')
      .send({"bandName":"foo"})
      .end(function(err, res){
        //  console.log(res.body);
          expect(res).to.have.status(400);
          done();
      });
    });
    afterEach(function(done){
      band1.collection.drop();
    //  user1.remove();
      done();
    });
});

describe("Test Find Band Function", function () {

  before(function(done){
    //user1.remove();
  band1.collection.drop();
  chai.request(server)
    .post('/api/band')
    .send({"bandName":"foo","bandAddress":"100 bar street","bandCity":"city","bandState":"WV","bandZip":"22222", "bandGenre1":"Rock", "bandGenre2":"Disco", "bandGenre3":"Metal", "bandPayRate":200})
    .end(function(err, res){
       done();
    })

  });
  it("Should get all bands", function (done) {
    chai.request(server)
    .get('/api/band/findbands')
    .end(function(err, res){
       //console.log(res.body);
      //console.log(res);
        expect(res).to.have.status(200);
        expect(res.body).to.have.lengthOf(1);
        done();
    });
  });
    it("Should find 1 band", function (done) {
      chai.request(server)
      .post('/api/band/findbands')
      .send({"Genre":["", "", ""],"Rate":1000})
      .end(function(err, res){
         //console.log(res.body);
        //console.log(res);
          expect(res).to.have.status(200);
          expect(res.body).to.have.lengthOf(1);
          done();
      });
    });
    it("Should find 1 band", function (done) {
      chai.request(server)
      .post('/api/band/findbands')
      .send({"Genre":["Metal", "Disco", "Rock"],"Rate":1000})
      .end(function(err, res){
        //  console.log(res.body);
          expect(res).to.have.status(200);
          expect(res.body).to.have.lengthOf(1);
          done();
      });
    });
    it("Should find 1 band", function (done) {
      chai.request(server)
      .post('/api/band/findbands')
      .send({"Genre":["Metal", "", ""],"Rate":1000})
      .end(function(err, res){
        //  console.log(res.body);
          expect(res).to.have.status(200);
          expect(res.body).to.have.lengthOf(1);
          done();
      });
    });
    it("Should find 0 bands when genre does not match", function (done) {
      chai.request(server)
      .post('/api/band/findbands')
      .send({"Genre":["Metal", "Christian", ""],"Rate":1000})
      .end(function(err, res){
        //  console.log(res.body);
          expect(res).to.have.status(200);
          expect(res.body).to.have.lengthOf(0);
          done();
      });
    });
    it("Should find 0 bands when rate is too low", function (done) {
      chai.request(server)
      .post('/api/band/findbands')
      .send({"Genre":["Metal", "", ""],"Rate":10})
      .end(function(err, res){
        //  console.log(res.body);
          expect(res).to.have.status(200);
          expect(res.body).to.have.lengthOf(0);
          done();
      });
    });
    after(function(done){
      band1.collection.drop();
    //  user1.remove();
      done();
    });
});
//
// describe("Test Fail find band", function () {
//
//   before(function(done){
//     //user1.remove();
//   band1.collection.drop();
//   done();
//   });
//   it("Band DB doesn't exist", function (done) {
//     chai.request(server)
//     .get('/api/band/findbands')
//     .end(function(err, res){
//        //console.log(res.body);
//       //console.log(res);
//         expect(res).to.have.status(400);
//         done();
//     });
//   });
//     after(function(done){
//       band1.collection.drop();
//     //  user1.remove();
//       done();
//     });
// });
