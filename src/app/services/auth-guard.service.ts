import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router) { }

  public canActivate(): Observable<boolean> {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['/login']);
      return of(false);
    }
    return of(true);
  }
}
