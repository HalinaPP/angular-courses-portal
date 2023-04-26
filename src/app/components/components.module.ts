import { CustomPipesModule } from './../pipes/pipes.module';
import { SelectLangComponent } from './select-lang/select-lang.component';
import { LogoComponent } from './logo/logo.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthInfoComponent } from './auth-info/auth-info.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SpinnerComponent } from './spinner/spinner.component';
import { CustomDirectivessModule } from '../directives/directives.module';

@NgModule({
  declarations: [
    AuthInfoComponent,
    FooterComponent,
    HeaderComponent,
    LogoComponent,
    SelectLangComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    CustomPipesModule,
    CustomDirectivessModule
  ],
  exports: [
    AuthInfoComponent,
    FooterComponent,
    HeaderComponent,
    LogoComponent,
    SelectLangComponent,
    SpinnerComponent,
  ],
})
export class ComponentsModule {}
