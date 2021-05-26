import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderHistory } from '../Model';

@Injectable({
  providedIn: 'root'
})
export class OrderhistoryService {

  constructor(private http: HttpClient) { }

  addOrderHistory(orderHistory: OrderHistory): Observable<OrderHistory> {
    return this.http.post<OrderHistory>('http://localhost:5000/api/orderHistory',orderHistory);
  }

  findAllOrderHistory(): Observable<OrderHistory[]> {
    return this.http.get<OrderHistory[]>('http://localhost:5000/api/orderHistory');
  }
}
