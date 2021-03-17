import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentURL } from '../constants/constants';
import { IStudent } from '../interfaces/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _httpClient: HttpClient) { }

  getStudents(): Observable<IStudent[]>{
   return this._httpClient.get<IStudent[]>(StudentURL);
  }

  deleteRecord(id: any) {
    const url: string = `${StudentURL}/${id}`;
    return this._httpClient.delete(url);
  }

  addRecord(emp: any) {
    return this._httpClient.post(StudentURL,emp);
  }

  editRecord(emp: any) {
    return this._httpClient.put(`${StudentURL}/${emp.id}`, emp);
  }

  getRecordById(id: number) {
    return this._httpClient.get<IStudent>(`${StudentURL}/${id}`);
  }
}
