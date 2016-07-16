import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';
import {Band} from "../common/band";

@Injectable()
export class FindBandService {

    private endpoint : string = 'api/band/findbands';

    constructor(private http : Http) {}

    public findBands(genres : any) :any{

        //TODO: put this in a nice little object
        let body : string = JSON.stringify(genres);
        let headers : Headers = new Headers({ 'Content-Type': 'application/json' });
        let options : RequestOptions = new RequestOptions({headers: headers});

        return this.http.post(this.endpoint, body, options).map(this.extractData)
                        .catch(this.handleError);
      //  return this.http.post(this.endpoint, body, options)
      //                  .catch(this.handleError);
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
