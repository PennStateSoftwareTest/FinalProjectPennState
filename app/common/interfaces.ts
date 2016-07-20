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

export interface ISuggestCriteria {
    key : string,
    value : string
}

export interface IOwnership {
    foreignId : string,
    criteria : ISuggestCriteria[]
}

export interface IVenue {
    ownerships : IOwnership[],
    venueName : string,
    address : string,
    city : string,
    state : string,
    zip : string,
    capacity : string,
    date : string,
    rate: string
}