import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { CourseUrl } from '../constants/constants';
import { ICourse } from '../interfaces/ICourse';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private _httpClient: HttpClient) {}

  getCourses(): Observable<ICourse[]> {
    return this._httpClient.get<ICourse[]>(CourseUrl);
  }

  deleteRecord(id: any) {
    const url: string = `${CourseUrl}/${id}`;
    return this._httpClient.delete(url);
  }

  addRecord(cous: any) {
    return this._httpClient.post(CourseUrl, cous);
  }

  editRecord(cous: any) {
    return this._httpClient.put(`${CourseUrl}/${cous.id}`, cous);
  }

  getRecordById(id: number) {
    return this._httpClient.get<ICourse>(`${CourseUrl}/${id}`);
  }
}
