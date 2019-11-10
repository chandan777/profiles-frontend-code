import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
//import { Global } from '../Shared/global';
//import { SessionService } from '../Shared/session';

@Injectable()
export class HttpService {

  //global: Global;
  //session: SessionService;
  constructor(private _http: Http) {

  //  this.global = new Global();
   // this.session = new SessionService();
  }

  get(url: string): Observable<any> {
    let headers = new Headers({
    //   'Authorization': 'Bearer ' + this.session.accessToken,
      'timezoneid': /\((.*)\)/.exec(new Date().toString())[1]
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(url, options)
          .map((response: Response) => <any>response.json())
          //.do((response: Response) => {
          //  
          //  setTimeout(() => {
          //    this.global.setHeaderWidth(<any>response);
          //  }, 600)
           
          //})
            // .do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError);
    }

  post(url: string, model: any, responsetype?: any): Observable<any> {
    let body = JSON.stringify(model);
    let headers = new Headers({
      'Content-Type': 'application/json'
      //,
      //'Authorization':
        //'Bearer ' + this.session.accessToken,
      //'timezoneid': /\((.*)\)/.exec(new Date().toString())[1]
    });
    //headers.append('Authorization','bearer ')
    let options = new RequestOptions({ headers: headers, responseType: responsetype });
    return this._http.post(url, body, options)
      .map((response: Response) => <any>response.json()
      )
      .catch(this.handleError);
  }


  postFile(url: string, model: any): Observable<any> {
    debugger;
    //let body = JSON.stringify(model);
    //let headers = new Headers();
    let headers = new Headers({
     //  'Authorization':
       // 'Bearer ' + this.session.accessToken
    });
   //// headers.append('contentType', 'false');
   // headers.append('processData', 'false');
   // headers.append('Authorization', 'Bearer ' + this.session.accessToken);
    let options = new RequestOptions({ headers: headers });
    return this._http.post(url, model, options)
      .map((response: Response) => <any>response.json())
      .catch(this.handleError);
  }
    put(url: string, id: number, model: any): Observable<any> {
        let body = JSON.stringify(model);
      let headers = new Headers({
        'Content-Type': 'application/json'
        //, 'Authorization':
          //'Bearer ' + this.session.accessToken 
        });
        let options = new RequestOptions({ headers: headers });
        return this._http.put(url + id, body, options)
            .map((response: Response) => <any>response.json())
            .catch(this.handleError);
    }

    delete(url: string, id: number): Observable<any> {
      let headers = new Headers({
        'Content-Type': 'application/json'
        //, 'Authorization':
        //  'Bearer ' + this.session.accessToken
         });
        let options = new RequestOptions({ headers: headers });
        return this._http.delete(url + id, options)
            .map((response: Response) => <any>response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
