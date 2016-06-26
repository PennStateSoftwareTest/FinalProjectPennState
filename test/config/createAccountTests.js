"use strict";
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);


var user1 = require('../../server/models/User.js');
var userService1 = require('../../server/services/userService.js');

describe("CreateAccount", function () {
    
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

    it("Successful create account should send a verification email", function () {
        //code to create a new user with
        var password = "tooSimple";
        //code to try login for new user with simple password
        var newUser = userService1.createUser(password);
        //expect login failureMessage

    });

        it("create account should fail without enter of proper Capcha to prevent bots", function () {
            //code to create a new user with
            var password = "tooSimple";
            //code to try login for new user with simple password
            var newUser = userService1.createUser(password);
            //expect login failureMessage
    });
});
