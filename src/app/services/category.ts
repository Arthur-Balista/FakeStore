import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private api = 'https://api.escuelajs.co/api/v1';

  constructor(private http: HttpClient) {}

  listarCategorias(): Observable<any> {
    return this.http.get(`${this.api}/categories`);
  }

}