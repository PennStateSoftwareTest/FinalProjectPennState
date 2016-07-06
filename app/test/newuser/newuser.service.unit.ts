/**
 * Created by jnevins on 6/4/16.
 */
import {Injector, provide} from '@angular/core';
import {describe, expect, beforeEach, it, inject, injectAsync, beforeEachProviders} from '@angular/core/testing';
import {Http, HTTP_PROVIDERS, XHRBackend, Response, Headers, RequestOptions} from '@angular/http';
import {MockBackend} from '@angular/http/testing';
import {NewUserService} from "../../newuser/newuser.service";
import {User} from "../../common/user";
import Spy = jasmine.Spy;
import {Observable} from 'rxjs/Observable';

describe('new user service tests',() => {

    beforeEachProviders(() => [HTTP_PROVIDERS, MockBackend]);

    it('should create a new user', inject([Http], (http : Http) => {
        //Arrange
        spyOn(http, 'post').and.returnValue({
            'catch': jasmine.createSpy('catch')
        });

        let newUserService : NewUserService = new NewUserService(http);

        let user : User = new User(
            'firstName',
            'lastName',
            'email@email.com',
            'venue',
            'superSecurePassword'
        );

        //Act
        newUserService.createUser(user);

        //Assert
        expect(http.post).toHaveBeenCalledWith('api/user', JSON.stringify(user), jasmine.any(RequestOptions));
    }));

    it('should throw an error when the server returns an error', inject([Http], (http : Http) => {
        //Arrange
        let catchSpy : Spy = jasmine.createSpy('catchSpy');

        spyOn(http, 'post').and.returnValue({
            'catch': catchSpy
        });

        let newUserService : NewUserService = new NewUserService(http);

        let user : User = new User(
            'firstName',
            'lastName',
            'email@email.com',
            'venue',
            'superSecurePassword'
        );

        let errorObject : any =  {
            message: 'bad things are bad'
        };

        let actualError : string = '';

        //Act
        newUserService.createUser(user);
        catchSpy.calls.mostRecent().args[0](errorObject).subscribe(
            () => {},
            (errorMessage : string) => actualError = errorMessage
        );

        //Assert
        expect(actualError).toEqual(errorObject.message);
    }));
});
