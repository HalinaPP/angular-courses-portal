import { selectToken } from './../store/selectors/auth.selectors';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserI, TokenDataI } from '../models/user';
import { LoadingService } from './loading.service';
import { IAppState } from '../store/state/app.state';
import { select, Store } from '@ngrx/store';

@Injectable()
export class AuthService {

  private authLink = 'http://localhost:3004/auth';
  private token: string;

  constructor(
    private http: HttpClient,
    private loader: LoadingService,
    private store: Store<IAppState>
  ) {
    this.store
      .select(selectToken)
      .subscribe((newToken) => {
        this.token = newToken;
      });
  }

  public login(userName: string, password: string) {
    this.loader.set(true);
    return this.http.post<TokenDataI>(`${this.authLink}/login`, { login: userName, password });
  }

  public getToken(): string {
    return this.token;
   }

  public isAuthenticated(): boolean {
    return !!this.token;
  }

  public getUserInfo(): Observable<UserI> {
    return this.http.post<UserI>(`${this.authLink}/userinfo`, { token: this.getToken() });
  }
}
