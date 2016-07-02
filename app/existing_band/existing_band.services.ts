/**
 * Created by jnevins on 5/28/16.
 */
import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';
import {Band} from "../create_band/band";

@Injectable()
export class ExistingBandService {

    private endpoint : string = '/api/band/getall';

    constructor(private http : Http) {}

    public getBands() : Observable<Object> {
      
        //TODO: put this in a nice little object
        return this.http.get(this.endpoint).map(this.extractData)
                        .catch(this.handleError);

    }
    private extractData(res:Response){
      //console.log(res);
      let body = res.json();
      //console.log(body);
    //  console.log(body[0]);
      return body || {};
    }
    private handleError(error : any) : ErrorObservable {
        let errorMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        return Observable.throw(errorMsg);
    }
}
