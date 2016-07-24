import {IOwnership} from "./interfaces";
import {IVenue} from "./interfaces";
import {ISuggestCriteria} from "./interfaces";
import {Ownership} from "./ownership";
import {Serializable} from "./serializable";

export class Venue extends Serializable implements IVenue{

  public ownerships : IOwnership[] = [];

  constructor(
      private userId : string = null,
      public venueName : string = null,
      public address : string = null,
      public city : string = null,
      public state : string = null,
      public zip : string = null,
      public capacity : string = null,
      public date : string = null,
      public rate: string = null
  ) {
    super();
    this.ownerships.push(new Ownership(userId, []));
  }

  public extendFromObject(venue : IVenue) : void {

    super.extendFromObject(venue);

    if (venue.hasOwnProperty('ownerships')) {
      this.ownerships = venue.ownerships.map((ownership) => {
        let instanceOwnersip : Ownership = new Ownership();

        instanceOwnersip.extendFromObject(ownership);

        return instanceOwnersip;
      });
    }
  }

  public getOwnership(userId : string) : IOwnership[] {
    return this.ownerships.filter((ownership) => {
        return ownership.foreignId === userId;
    })
  }
}