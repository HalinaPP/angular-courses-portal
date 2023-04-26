import { selectUser } from '../../store/selectors/auth.selectors';
import { UserI } from '../../models/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { IAppState } from '../../store/state/app.state';
import { LogoutUser } from '../../store/actions/auth.actions';

@Component({
  selector: 'app-auth-info',
  templateUrl: './auth-info.component.html',
  styleUrls: ['./auth-info.component.scss'],
  providers: [AuthService]
})
export class AuthInfoComponent implements OnInit {

  public userInfo$: Observable<UserI>;
  public userName: string;

  constructor(
    private router: Router,
    private store: Store<IAppState>
  ) {}

  ngOnInit() {
    this.userInfo$ = this.store.pipe(select(selectUser));
    this.store
    .select(selectUser)
    .subscribe((user) => {
      this.userName = `${user?.name?.first} ${user?.name?.last}`;
    });
  }

  public logout() {
    this.userInfo$.subscribe(
      userInfo => {
        this.store.dispatch(new LogoutUser(userInfo.login));
        this.router.navigate(['/login']);
      }
    );
  }
}
