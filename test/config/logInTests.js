"use strict";
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);
function hello(name, cb) {
    cb("hello " + name);
}

describe("hello", function () {
    it("should call callback with correct greeting", function () {
        var cb = sinon.spy();

        hello("foo", cb);

        expect(cb).to.have.been.calledWith("hello foo");
    });
});
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


//Givin I have not already logged in
  //Given the login page does not detect a sessionID
//Expect to be presented with the login page

//Given I have submitted a username and password that exists
  //given the database can be queried to find the user that matches these attributes
    //given i can establish a connection to the database

  //given a unique session can be created for this user
//expect to be presented with the main interface page for usertype

//given i have submitted a username that does not exists
//expect to be presented with a message that says username does not exists

//given i have submitted a password that does not exists
//expect to be presented with a message that states password does not exists

//given i have not filled in the user name field
//expect the Log In button to be disabled

//given i have not filled in the password field
//expect the Log In button to be disabled

//given i have not entered the min required characters for username field
//expect the Log In button to be disabled

//given i have not filled in the password field with the minumum complexity
//expect the Log In button to be disabled
