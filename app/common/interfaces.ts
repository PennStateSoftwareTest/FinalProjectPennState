/**
 * Created by jnevins on 7/10/16.
 */


/**
 * Response form the server.
 */
export interface IUserModel {
    _id : string,
    email : string,
    firstName : string,
    lastName : string,
    roles : string[]
}

export interface IAuthResponse {
    success : boolean,
    user : IUserModel
}