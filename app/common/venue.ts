import {IOwnership} from "./interfaces";
import {IVenue} from "./interfaces";
import {ISuggestCriteria} from "./interfaces";

export class Venue implements IVenue{

  public ownerships : IOwnership[] = [];

  constructor(
      private userId : string,
      public venueName : string = null,
      public address : string = null,
      public city : string = null,
      public state : string = null,
      public zip : string = null,
      public capacity : string = null,
      public date : string = null,
      public rate: string = null
  ) {
    this.ownerships.push({
      foreignId: userId,
      criteria: []
    })
  }
}