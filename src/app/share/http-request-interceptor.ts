import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';

/** Inject With Credentials into the request */
@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    
      console.log("interceptor: " + req.url);
      req = req.clone(
          {headers: req.headers.set(
            'Access-Control-Allow-Origin', 'https://jsonplaceholder.typicode.com/',            
          )
          .set('Content-Type', 'application/json')        
        }
                    // withCredentials: true
      );
        
      return next.handle(req);
  }
}