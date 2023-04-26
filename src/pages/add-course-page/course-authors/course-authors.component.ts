import { Component, forwardRef, Input } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Author } from 'src/app/models/course';
import { FetchAuthors } from 'src/app/store/actions/courses.actions';
import { IAppState } from 'src/app/store/state/app.state';

@Component({
  selector: 'app-course-authors',
  templateUrl: './course-authors.component.html',
  styleUrls: ['./course-authors.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CourseAuthorsComponent),
      multi: true,
    },
  ],
})
export class CourseAuthorsComponent implements ControlValueAccessor {
  @Input() courseAuthors: Author[] = [];
  public authorsList: Author[] = [];
  public authorsControl = new FormControl('', [Validators.required]);
  public authorsSub: Subscription;
  public searchSubject$ = new Subject();
  public debounceTime = 1000;

  constructor(private store: Store<IAppState>) {
    this.authorsSub = this.store
      .select((state) => state.courses.allAuthors)
      .subscribe((authors) => {
        this.authorsList = authors;
      });

    this.searchSubject$
      .pipe(debounceTime(this.debounceTime))
      .subscribe((textFragment: string) => {
        this.store.dispatch(new FetchAuthors({ textFragment }));
      });

    this.authorsControl.valueChanges.subscribe((textFragment) => {
      if (textFragment.length) {
        this.searchSubject$.next(textFragment);
      }
    });
  }

  public get value() {
    return this.courseAuthors;
  }

  @Input()
  public set value(value: any) {
    this.onChange(value);
    this.onTouched();
  }

  public add(value): void {
    const result = this.courseAuthors.filter((author) => {
      return author.name === value.name;
    });
    if (!result.length) {
      this.courseAuthors = [...this.courseAuthors, value];
      this.authorsControl.setValue('');
      this.onChange(this.courseAuthors);
    }
  }

  public delete(item: Author): void {
    this.courseAuthors = this.courseAuthors.filter((author) => {
      return author.name !== item.name;
    });
    this.onChange(this.courseAuthors);
  }

  public onChange: any = () => {};
  public onTouched: any = () => {};

  public writeValue(value: any) {
    if (value) {
      this.courseAuthors = [...value];
    }
  }

  public registerOnChange(fn: any) {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
}
