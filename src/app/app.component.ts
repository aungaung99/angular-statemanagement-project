import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxsModule, Select, Store } from '@ngxs/store';
import { GetOrders, SetOrder } from './shared/action/order.action';
import { OrderState } from './shared/state/order.state';
import { Observable } from 'rxjs';
import { OrderModel } from './core/models/order.model';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { OrderService } from './core/services/order.service';
import { OrderEntryComponent } from "./shared/components/order-entry/order-entry.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor, AsyncPipe, OrderEntryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'angular-statemanagement-project';

  // @Select(OrderState.getOrders) orders$: Observable<OrderModel[]> | undefined;
  orders$: Observable<OrderModel[]> = inject(Store).select(OrderState.orders);
  constructor(private store: Store, public orderService: OrderService) { }

  ngOnInit() {
    // Dispatch the action to fetch orders
    // this.onShowData();
  }

  onShowData() {
    this.store.dispatch(new GetOrders());
  }
}
