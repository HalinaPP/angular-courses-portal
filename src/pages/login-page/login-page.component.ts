import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { SetToken, SetUser } from '../../app/store/actions/auth.actions';
import { IAppState } from '../../app/store/state/app.state';
import { AuthService } from '../../app/services/auth.service';
import { LoadingService } from '../../app/services/loading.service';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  providers: [AuthService]
})
export class LoginPageComponent {
  public loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(
    private authService: AuthService,
    private loader: LoadingService,
    private router: Router,
    private store: Store<IAppState>) { }

  public login() {
    const { email, password } = this.loginForm.getRawValue();
    this.authService.login(email, password)
      .subscribe(data => {
        this.store.dispatch(new SetToken(data.token));

        this.authService.getUserInfo().subscribe(userInfo => {
           this.store.dispatch(new SetUser(userInfo));
         });

        setTimeout(() => { this.loader.set(false); this.router.navigate(['/courses']); }, 500);
      });
  }
}
