import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) { }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const authHeader = `Bearer ${this.auth.getToken()}`;

    const authReq = req.clone({
      headers: req.headers.set(
        'Authorization',
        authHeader
      )
    });

    return next.handle(authReq);
  }
}
