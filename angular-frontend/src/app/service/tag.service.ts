import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, Tag } from '../Model';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  constructor(private http: HttpClient) {}

  addTagToProduct(idProduct: number, idTag: number): Observable<Product> {
    return this.http.post<Product>(`http://localhost:5000/api/addTagToProduct/${idProduct}/${idTag}`, null);
  }

  deleteTagFormProduct(idProduct: number, idTag: number): Observable<Product> {
    return this.http.delete<Product>(`http://localhost:5000/api/deleteTagFormProduct/${idProduct}/${idTag}`);
  }

  deleteTag(idTag: number): Observable<Tag> {
    return this.http.delete<Tag>(`http://localhost:5000/api/deleteTag/${idTag}`);
  }

  findTagById(id: number): Observable<Tag> {
    return this.http.get<Tag>(`http://localhost:5000/api/findTagById/${id}`);
  }

  editTag(tag: Tag, id: number): Observable<Tag> {
    return this.http.put<Tag>(`http://localhost:5000/api/editTag/${id}`, tag);
  }

  addTag(tag: Tag): Observable<Tag> {
    return this.http.post<Tag>(`http://localhost:5000/api/addTag`, tag);
  }

  findTagsForProduct(idProduct: number): Observable<Tag[]> {
    return this.http.get<Tag[]>(`http://localhost:5000/api/findTagsForProduct/${idProduct}`);
  }

  findAllTags(): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:5000/api/findAllTags`);
  }
  // findAllTagByName(name: string): Observable<Tag[]> {
  //   return this.http.get<Tag[]>(`http://localhost:5000/api/findAllTagByName/${name}`);
  // }

  findProductsForTag(idTak: number): Observable<Product[]> {
    return this.http.get<Product[]>(`http://localhost:5000/api/findProductsForTag/${idTak}`);
  }
}