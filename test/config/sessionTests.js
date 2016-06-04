"use strict";
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

describe("I have not already logged in", function () {
    it("I should not have any active session", function () {
        //code to verify that userTest69 is not an existing username
	//code to test that login fails when submitting userTest69 as username
  var cb = sinon.spy();
  hello("foo", cb);
  //Expect to be presented with the login page
  expect(cb).to.have.been.calledWith("login page here");
      });
});

describe("I have successfully logged in", function () {
    it("I should have an active session", function () {
      //Given I have successfully logged in
        //Given I have submitted a username and password that has been verified
          //given the database can be queried to find the userID that matches these attributes
            //given i can establish a connection to the database
              //given a unique session was created for this user
  var cb = sinon.spy();
  hello("foo", cb);
//expect to be presented with the main interface page for this unique user
  expect(cb).to.have.been.calledWith("unique user interface");
      });
});
