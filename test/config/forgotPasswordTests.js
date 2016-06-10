"use strict";
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);


  describe("Forgot Password", function () {
//given the capcha was subitted to prevent bots
      it("Forgot password shall only succeed if Capcha was entered correctly", function () {
          //code to verify that userTest69 is not an existing username
  	//code to test that login fails when submitting userTest69 as username
    var cb = sinon.spy();
    hello("foo", cb);
    expect(cb).to.have.been.calledWith("login failure message");
        });

//Given that the email address exists
      it("Forgot password shall check if the email exists and fail if it does not", function () {
        var cb = sinon.spy();
        hello("foo", cb);
        expect(cb).to.have.been.calledWith("login failure message");
      });

        //expect an email sent to user with a unique session id Url to display the reset password form
      it("Successful Forgot Password shall generate a unique reset code", function () {
        var cb = sinon.spy();
        hello("foo", cb);
        //expect a message dispays with a unique reset code and instructions (expiring SesionID after 15 minutes)
        expect(cb).to.have.been.calledWith("login failure message");
      });
      it("Successful Forgot Password shall send email with reset password form url", function () {
        var cb = sinon.spy();
        hello("foo", cb);
        //expect a message dispays with a unique reset code and instructions (expiring SesionID after 15 minutes)
        expect(cb).to.have.been.calledWith("login failure message");
      });
  });
