import { CustomPipesModule } from './../../app/pipes/pipes.module';
import { SharedComponentsModule } from './../../shared/components/shared.module';
import { DurationPipe } from './../../app/pipes/duration.pipe';
import { AddCoursePageComponent } from './add-course-page.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CourseAuthorsComponent } from './course-authors/course-authors.component';
import { CourseDateComponent } from './course-date/course-date.component';
import { CourseDurationComponent } from './course-duration/course-duration.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddCoursePageComponent,
    CourseAuthorsComponent,
    CourseDateComponent,
    CourseDurationComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    ReactiveFormsModule,
    SharedComponentsModule,
    CustomPipesModule
  ],
  exports: [],
})
export class AddCourseModule {}
