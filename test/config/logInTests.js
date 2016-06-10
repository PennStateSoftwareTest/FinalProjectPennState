"use strict";
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);



/*  function hello(name, cb) {
    cb("hello " + name);
    }

describe("hello", function () {
    it("should call callback with correct greeting", function () {
        var cb = sinon.spy();

        hello("foo", cb);

        expect(cb).to.have.been.calledWith("hello foo");
    });
});
  */

var user1 = require('../../server/models/User.js');
var logIn1 = require('../../server/services/userService.js');

describe("LogIn", function () {
    it("LogIn should fail if userName does not exist", function () {
        //code to verify that userTest69 is not an existing username
	//code to test that login fails when submitting userTest69 as username
  var cb = sinon.spy();
  hello("foo", cb);
  expect(cb).to.have.been.calledWith("login failure message");
      });


    it("LogIn should fail if the password does not match the userName", function () {
      var cb = sinon.spy();
      hello("foo", cb);
      expect(cb).to.have.been.calledWith("login failure message");
    });
    it("LogIn should succeed if userName and Password match", function () {
      var cb = sinon.spy();
      hello("foo", cb);
      expect(cb).to.have.been.calledWith("login failure message");
    });
});
