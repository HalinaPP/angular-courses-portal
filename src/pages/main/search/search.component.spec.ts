import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



describe('SearchComponent as a Class', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
/*
  it('raises search event when clicked', () => {
    const component = new CoursesListItemComponent();
    const course: Course = {
      id: '123',
      title: 'Video course 123',
      duration: 123.5,
      creationDate: new Date('04/01/2123'),
      description: 'This course abouth something useful for you 123'
    };
    component.item = course;

    component.delete.subscribe((id: string) => expect(id).toBe(course.id));
    component.deleteItem(course.id);
  });*/
});
