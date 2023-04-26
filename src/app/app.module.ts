import { ComponentsModule } from './components/components.module';
import { MainModule } from './../pages/main/main.module';
import { SharedComponentsModule } from './../shared/components/shared.module';
import { appReducers } from './store/reducers/app.reduce';
import { AuthService } from './services/auth.service';
import { CourseService } from './services/courses.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from '../pages/login-page/login-page.component';
import { PageNotFoundComponent } from '../pages/page-not-found/page-not-found.component';
import { AuthGuardService } from './services/auth-guard.service';
import { LoadingService } from './services/loading.service';
import {
  HttpClientModule,
  HTTP_INTERCEPTORS,
  HttpClient,
} from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { CourseEffects } from './store/effects/courses.effects';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CommonModule } from '@angular/common';
import { AddCourseModule } from 'src/pages/add-course-page/add-course.module';
import { ReactiveFormsModule } from '@angular/forms';

export function HttpLoaderFactory(http: HttpClient): TranslateLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([CourseEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      useDefaultLang: false,
    }),
    ComponentsModule,
    AddCourseModule,
    MainModule,
    SharedComponentsModule
  ],
  exports: [TranslateModule],

  providers: [
    CourseService,
    LoadingService,
    AuthService,
    AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
