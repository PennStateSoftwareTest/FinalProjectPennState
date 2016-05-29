/**
 * Created by jnevins on 5/28/16.
 */

export class User {

    constructor(
        public firstName : string = null,
        public lastName : string = null,
        public username : string = null,
        public email : string = null,
        public accountType : string = null,
        public password : string = null
    ) {}
}