/**
 * Created by jnevins on 7/23/16.
 */

export class Serializable {
    public extendFromObject(fromObject : {[key : string] : any}) : void {
        for (let propName in fromObject) {
            this[propName] = fromObject[propName];
        }
    }
}