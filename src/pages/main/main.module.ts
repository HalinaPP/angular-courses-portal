import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomPipesModule } from './../../app/pipes/pipes.module';
import { SearchComponent } from './search/search.component';
import { MainComponent } from './main.component';
import { CoursesListItemComponent } from './courses-list-item/courses-list-item.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CustomDirectivessModule } from 'src/app/directives/directives.module';
import { SharedComponentsModule } from 'src/shared/components/shared.module';
import { AppRoutingModule } from '../../app/app-routing.module';

@NgModule({
  declarations: [
    CoursesListComponent,
    CoursesListItemComponent,
    MainComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    SharedComponentsModule,
    TranslateModule,
    ReactiveFormsModule,
    CustomPipesModule,
    CustomDirectivessModule,
    AppRoutingModule,
  ],
  exports: [],
})
export class MainModule {}
