import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Course } from '../models/course';
import { CoursesListItemComponent } from './courses-list-item.component';

describe('CoursesListItemComponent', () => {
  let component: CoursesListItemComponent;
  let fixture: ComponentFixture<CoursesListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursesListItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('CoursesListItemComponent as a class testing', () => {
  let component: CoursesListItemComponent;
  let fixture: ComponentFixture<CoursesListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursesListItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('raises delete event when clicked', () => {
    const component = new CoursesListItemComponent();
    const course: Course = {
      id: '123',
      name: 'Video course 123',
      length: 123.5,
      date: new Date('04/01/2123'),
      description: 'This course abouth something useful for you 123',
      isTopRated: true,
      authors: [],
    };
    component.item = course;

    component.delete.subscribe((id: string) => expect(id).toBe(course.id));
    component.deleteItem(course.id);
  });
});

describe('CoursesListItemComponent stand alone testing', () => {
  let component: CoursesListItemComponent;
  let fixture: ComponentFixture<CoursesListItemComponent>;
  let expectedCourse: Course;
  let courseDe: DebugElement;
  let courseEl: HTMLElement;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [CoursesListItemComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    courseDe = fixture.debugElement.query(By.css('.course-list-item'));
    courseEl = courseDe.nativeNode.nativeElement;

    expectedCourse = {
      id: '123',
      name: 'Video course 123',
      length: 123.5,
      date: new Date('04/01/2123'),
      description: 'This course abouth something useful for you 123',
      isTopRated: true,
      authors: [],
    };

    component.item = expectedCourse;

    fixture.detectChanges();
  });

  it('should be no empty course title', () => {
    const expectedPipedName = expectedCourse.name;
    expect(courseEl.textContent).toContain(expectedPipedName);
    //expect(expectedCourse.title).toContain(expectedPipedName);
  });
});

describe('CoursesListItemComponent test host component', () => {
  let courseEl: HTMLElement;
  let testHost: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [CoursesListItemComponent, TestHostComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;
    fixture.detectChanges();
    courseEl = fixture.nativeElement.querySelector('.course-list-item');
    fixture.detectChanges();
  });

  it('should be no empty course title', () => {
    const expectedPipedName = testHost.course.name;
    expect(courseEl.textContent).toContain(expectedPipedName);
  });
});

////// Test Host Component //////
import { Component } from '@angular/core';

@Component({
  template: ` <app-courses-list-item
    [item]="item"
    (delete)="deleteItem($event)"
  ></app-courses-list-item>`,
})
class TestHostComponent {
  course: Course = {
    id: '123',
    name: 'Video course 123',
    length: 123.5,
    date: new Date('04/01/2123'),
    description: 'This course abouth something useful for you 123',
    isTopRated: true,
    authors: [],
  };
  selectedCourse: Course;
  onSelected(course: Course) {
    this.selectedCourse = course;
  }
}
