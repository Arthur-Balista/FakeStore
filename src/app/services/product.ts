import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private api = 'https://api.escuelajs.co/api/v1';

  constructor(private http: HttpClient) {}

  listarProdutos(): Observable<any> {
    return this.http.get(`${this.api}/products`);
  }

}