import { Author, Course } from '../models/course';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  public items: Course[];
  private courseLink = 'http://localhost:3004/courses';
  private authorLink = 'http://localhost:3004/authors';
  private courseOnPage = 3;

  constructor(private http: HttpClient, private loader: LoadingService) {}

  public getList(
    start: number = 0,
    textFragment: string = ''
  ): Observable<Course[]> {
    this.loader.set(true);
    let courseLinkByPaging = `${this.courseLink}?sort=date&order=desc&start=${start}&count=${this.courseOnPage}`;

    if (textFragment) {
      courseLinkByPaging = `${courseLinkByPaging}&textFragment=${textFragment}`;
    }

    return this.http.get<Course[]>(courseLinkByPaging);
  }

  public getItemById(id: string): Observable<Course> {
    this.loader.set(true);
    return this.http.get<Course>(`${this.courseLink}/${id}`);
  }

  public createCourse(data: Course): Observable<Course> {
    this.loader.set(true);
    if (data) {
      const { name, date, length, description, isTopRated, authors } = data;
      const body = {
        name,
        date,
        length,
        description,
        isTopRated,
        authors,
      };

      return this.http.post<Course>(this.courseLink, body);
    }
  }

  public updateCourse(data: Course): Observable<Course> {
    this.loader.set(true);
    if (data) {
      const { name, date, length, description, isTopRated, authors } = data;
      const body = {
        name,
        date,
        length,
        description,
        isTopRated,
        authors,
      };

      return this.http.patch<Course>(`${this.courseLink}/${data.id}`, body);
    }
  }

  public removeItem(id: string): void {
    this.loader.set(true);
    this.http.delete(`${this.courseLink}/${id}`).subscribe();
  }

  public getAuthors(textFragment: string): Observable<Author[]> {
    this.loader.set(true);
    return this.http.get<Author[]>(this.authorLink, {
      params: { textFragment },
    });
  }
}
