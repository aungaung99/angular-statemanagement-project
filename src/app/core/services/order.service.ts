import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { OrderModel } from '../models/order.model';
import { environment } from '../../../environments/environments';
import { Params } from '../models/core.interface';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  public skeletonLoader: boolean = false;

  constructor(private http: HttpClient) { }

  getOrders(payload?: Params): Observable<OrderModel[]> {
    return this.http.get<OrderModel[]>(`${environment.URL}/order.json`, { params: payload }).pipe(
      // tap((orders: OrderModel[]) => { console.log('Fetch orders:', orders) })
    );
  }
}
