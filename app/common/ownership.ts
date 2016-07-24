/**
 * Created by jnevins on 7/23/16.
 */
import {IOwnership} from "./interfaces";
import {ISuggestCriteria} from "./interfaces";
import {Criteria} from "./constants";
import {Serializable} from "./serializable";

export class Ownership extends Serializable implements IOwnership {


    constructor(
        public foreignId ?: string,
        public criteria ?: ISuggestCriteria[]
    ) {
        super();
    }

    public hasCriteria(criterion : Criteria) : boolean {
        return this.criteria.some((savedCriterion) => {
            return savedCriterion.key === criterion;
        });
    }

    public updateCriteria(key : Criteria, value : string) : void {

    }

    public addCriteria(newKey : Criteria, newValue : string) : void {
        this.criteria.push({
            key: newKey,
            value: newValue
        })
    }
}
