import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Category } from '../category/category';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = environment.baseApiUrl + 'products';

  constructor(private client: HttpClient) { }

  getList(): Observable<Product[]>{
    return this.client.get<Product[]>(this.apiUrl);
  }

  add(p:Product): Observable<Product>{
  return this.client.post<Product>(this.apiUrl,p);
}
  delete(id:number):Observable<void>{
    return this.client.delete<void>(this.apiUrl + '/' + id); //this format is given in the delete method of Api
  }

  getById(id:number):Observable<Product>{
    return this.client.get<Product>(this.apiUrl + '/' + id); //this format is given in the get element by id method of Api
  }

  update(p:Product):Observable<void>{
    return this.client.put<void>(this.apiUrl + '/' + p.id,p);
  }
}
