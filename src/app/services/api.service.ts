import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProducto } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _http = inject(HttpClient);
  private urlBase: string ='https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  getProducts():Observable<IProducto[]>{
    return this._http.get<IProducto[]>(this.urlBase);
  }

  getProduct(id: number):Observable<IProducto>{
    return this._http.get<IProducto>(`${this.urlBase}/${id}`);
  }
}

