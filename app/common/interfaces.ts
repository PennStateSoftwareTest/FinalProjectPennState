/**
 * Created by jnevins on 7/10/16.
 */

import {Criteria} from "./constants";

export interface ISerializable {
    extendFromObject ?: (fromObject : {[key : string] : any}) => void;
}

/**
 * Response form the server.
 */
export interface IUserModel {
    _id : string,
    email : string,
    firstName : string,
    lastName : string,
    phoneNumber:string,
    roles : string[]
}

export interface IAuthResponse {
    success : boolean,
    user : IUserModel
}

export interface ISuggestCriteria {
    key : Criteria,
    value : string
}

export interface IOwnership {
    foreignId : string,
    criteria : ISuggestCriteria[],

    hasCriteria : (criterion : Criteria) => boolean,
    getCriteria : (criterion : Criteria) => string,
    updateCriteria : (key : Criteria, value : string) => void,
    addCriteria : (newKey : Criteria, newValue : string) => void
}

export interface IVenue extends ISerializable{
    _id ?: string,
    ownerships : IOwnership[],
    venueName : string,
    address : string,
    city : string,
    state : string,
    zip : string,
    capacity : string,
    date ?: string,
    rate ?: string,

    getOwnership ?: (foriegnId : string) => IOwnership[]
}

export interface IVenueSuggestion extends IVenue {
    bands : IBand
}

export interface IBand {
    ownerships : IOwnership[],
    bandName : string,
    bandAddress : string,
    bandCity : string,
    bandState : string,
    bandZip : string,
    bandPayRate: string,
    bandWebsite:string,
    bandGenre1:string,
    bandGenre2:string,
    bandGenre3:string,
    bandManagerName:string,
    bandManagerEmail: string,
    bandManagerPhone: string
}