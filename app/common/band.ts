import {IOwnership} from "./interfaces";
import {IBand} from "./interfaces";
import {ISuggestCriteria} from "./interfaces";
import {Ownership} from "./ownership";

export class Band implements IBand{

  public ownerships : IOwnership[] = [];

  constructor(
      private userId : string = null,
      public bandName : string = null,
      public bandAddress : string = null,
      public bandCity : string = null,
      public bandState : string = null,
      public bandZip : string = null,
      //public capacity : string = null,
      public bandPayRate: string = null,
      public bandGenre1: string = null,
      public bandGenre2: string = null,
      public bandGenre3: string = null,
      public bandWebsite:string = null,
      public bandManagerName:string = null,
      public bandManagerEmail: string = null,
      public bandManagerPhone: string = null
  ) {
    this.ownerships.push(new Ownership(userId, []));
  }
}
