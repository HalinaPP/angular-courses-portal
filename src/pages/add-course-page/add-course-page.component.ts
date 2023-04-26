import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
import {
  CreateCourse,
  LoadCourseById,
  UpdateCourse,
} from '../../app/store/actions/courses.actions';
import { selectCurrCourse } from '../../app/store/selectors/courses.selectors';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/models/course';
import { IAppState } from 'src/app/store/state/app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  dateValidation,
  onlyNumbersValidation,
} from 'src/app/utils/validators';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.scss'],
})
export class AddCoursePageComponent implements OnInit {

  public nameControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(50),
  ]);
  public descriptionControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(500),

  ]);

  public durationControl = new FormControl('', [
    Validators.required,
    onlyNumbersValidation,
  ]);
  public dateControl = new FormControl('', [
    Validators.required,
    dateValidation,
  ]);
  public authorsControl = new FormControl('', Validators.required);

  public currCourse$: Observable<Course>;
  public duration: number;
  public creationDate: Date;
  private currCourseId: string;
  public course: Course = {
    id: null,
    name: '',
    description: '',
    length: 0,
    date: null,
    authors: [],
    isTopRated: false,
  };
  public currCourseValue: Course;
  public courseForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<IAppState>,
    private fb: FormBuilder
  ) {
    this.currCourseId = this.route.snapshot.paramMap.get('id');
    const f =  document.createDocumentFragment;
    f.length
  }

  public get controls(): { [key: string]: AbstractControl } {
    return this.courseForm.controls;
  }

  public cancel() {
    this.router.navigate(['/courses']);
  }

  public save() {
    if (this.currCourseId) {
      this.store.dispatch(new UpdateCourse(this.course));
    } else {
      this.store.dispatch(new CreateCourse(this.course));
    }
    this.router.navigate(['/courses']);
  }

  public buildForm() {
    this.courseForm = this.fb.group({
      name: this.nameControl,
      description: this.descriptionControl,
      duration: this.durationControl,
      date: this.dateControl,
      authors: this.authorsControl,
    });

    this.nameControl.setValue(this.course.name);
    this.descriptionControl.setValue(this.course.description);
    this.durationControl.setValue(this.course.length);
    this.dateControl.setValue(this.course.date);
    this.authorsControl.setValue(this.course.authors);
  }

  public buildSubscribeForm() {
    this.buildForm();

    this.courseForm.valueChanges.subscribe(() => {
      const {
        name,
        description,
        duration,
        date,
        authors,
      } = this.courseForm.value;

      this.course.name = name;
      this.course.description = description;
      this.course.length = duration;
      this.course.date = date;
      this.course.authors = authors;
    });
  }

  ngOnInit() {
    if (this.currCourseId) {
      this.store.dispatch(new LoadCourseById(this.currCourseId));

      this.store.select(selectCurrCourse).subscribe((course) => {
        this.course = { ...course };
        this.buildSubscribeForm();
      });
    } else {
      this.buildSubscribeForm();
    }
  }
}
