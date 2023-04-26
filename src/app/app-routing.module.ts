import { AddCoursePageComponent } from '../pages/add-course-page/add-course-page.component';
import { MainComponent } from '../pages/main/main.component';
import { LoginPageComponent } from '../pages/login-page/login-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../pages/page-not-found/page-not-found.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'courses/new', component: AddCoursePageComponent, canActivate: [AuthGuard] },
  { path: 'courses/:id', component: AddCoursePageComponent, canActivate: [AuthGuard] },
  { path: 'courses', component: MainComponent , canActivate: [AuthGuard]},
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
