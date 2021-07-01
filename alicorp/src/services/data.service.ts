import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Users } from 'src/app/models/users/users.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  urlAPI = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.urlAPI);
  }

  deleteUser(id: string): Observable<Users[]> {
    return this.http.delete<Users[]>(`${this.urlAPI}/${id}`);
  }
}
