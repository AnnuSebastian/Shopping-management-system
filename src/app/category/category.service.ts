import { HttpClient } from '@angular/common/http';//client object creation automatically imports this
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Category } from './category';
import { Observable } from 'rxjs';

@Injectable({  //injectable makes the class CategoryServive injectable to variuos other components and classes
  providedIn: 'root' //this class could be injected anywhere inside the root module itself.

  // if providedIn : <selector> of any component then the class could only be injected to that component only.
})
export class CategoryService {
  //'https://localhost:7223/api/'
  apiUrl = environment.baseApiUrl + 'categories';

 //or can be defined as apiUrl = `${environment.baseApiUrl}categories`;
  
 constructor(private client:HttpClient) { }//client object of type HttpCliet is created and given by API

 getList(): Observable<Category[]>{
  return this.client.get<Category[]>(this.apiUrl);
 }

 add(cat:Category) : Observable<Category>{
  return this.client.post<Category>(this.apiUrl,cat);
 }

 getById(id:number):Observable<Category>{
  return this.client.get<Category>(this.apiUrl + '/' + id); //this format is given in the get element by id method of Api

}

  update(cat:Category):Observable<void>{
  return this.client.put<void>(this.apiUrl + '/' + cat.id,cat);
  }
}