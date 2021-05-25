import { User } from '../Model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const USERNAME_KEY = 'USERNAME';
const status='firstVisit';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  
  constructor(private http: HttpClient) {}

  addUser(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:5000/api/addUser', user);
  }

  findAllUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:5000/api/admin/findAllUsers');
  }
  findUserById(id: any): Observable<User> {
    return this.http.get<User>(`http://localhost:5000/api/findUserById/${id}`);
  }
  editUser(user: User, idUser: number): Observable<User> {
    return this.http.put<User>(`http://localhost:5000/api/editUser/${idUser}`, user);
  }

  deleteUser(idUser: number): Observable<User> {
    return this.http.delete<User>(`http://localhost:5000/api/deleteUser/${idUser}`);
  }
  findByUsername(username: string): Observable<any> {
    return  this.http.get<any>(`http://localhost:5000/api/findByUsername/${username}`);
  }
  checkUser(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:5000/api/login', user);
  }

  saveUsername(username: string) {
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, username);
  }
  

  getUsername(): string {
    return sessionStorage.getItem(USERNAME_KEY)!;
  }
  public setItem(key: string, value: string) {
    window.sessionStorage.setItem(key, value);
  }
    
  public getItem(key: string){ 
    return window.sessionStorage.getItem(key)
  }

  signOut() {
    window.sessionStorage.clear();
  }
}