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

    it("should test the createBand function", function (done) {
      chai.request(server)
      .post('/api/band')
      .send({"bandName":"foo","bandAddress":"100 bar street","bandCity":"city","bandState":"WV","bandZip":"22222"})
      .end(function(err, res){
        //  console.log(res.body);
          expect(res).to.have.status(200);
          done();
      });
    });
    afterEach(function(done){
      band1.collection.drop();
    //  user1.remove();
      done();
    });
});
