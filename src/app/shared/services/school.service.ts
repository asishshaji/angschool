import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISchool } from '../interfaces/ISchool';
import { Observable } from 'rxjs';
import { SchoolURL } from '../constants/constants';

@Injectable({
  providedIn: 'root',
})
export class SchoolService {
  constructor(private _httpClient: HttpClient) {}

  getSchools(): Observable<ISchool[]> {
    return this._httpClient.get<ISchool[]>(SchoolURL);
  }

  deleteRecord(id: any) {
    const url: string = `${SchoolURL}/${id}`;
    return this._httpClient.delete(url);
  }

  addRecord(sch: any) {
    return this._httpClient.post(SchoolURL, sch);
  }

  editRecord(sch: any) {
    return this._httpClient.put(`${SchoolURL}/${sch.id}`, sch);
  }

  getRecordById(id: number) {
    return this._httpClient.get<ISchool>(`${SchoolURL}/${id}`);
  }
}
