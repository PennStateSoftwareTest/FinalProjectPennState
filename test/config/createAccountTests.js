"use strict";
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);


var user1 = require('../../server/models/User.js');
var userService1 = require('../../server/services/userService.js');

describe("CreateAccount", function () {
    it("Create Account should fail if userName already exists", function () {
        //code to verify that userTest69 is not an existing username
	//code to test that login fails when submitting userTest69 as username
  var username = "userTest69";
  var newUser = userService1.createUser(username);
  var cb = sinon.spy();

  function getSignupForm(name, cb) {
      cb("hello " + name)};

  getSignupForm("foo", cb);

  expect(newUser).to.have.been.calledWith("some errorCode");
      });

    it("Create account should fail if the email already exists", function () {
        //code to create a new user with
        var email = "userTest69@testEmail.com";
        var newUser = userService1.createUser(email);
        //code to try login for new user with incorrect password
        //expect login failureMessage
        expect(newUser).to.have.been.calledWith("some errorCode");

    });
    it("Create account should fail if the password is not appropriately complex", function () {
        //code to create a new user with
        var password = "tooSimple";
        //code to try login for new user with simple password
        var newUser = userService1.createUser(password);
        //expect login failureMessage
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
