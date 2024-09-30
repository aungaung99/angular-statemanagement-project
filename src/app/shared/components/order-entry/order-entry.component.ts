import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { SetOrder } from '../../action/order.action';
import { OrderModel } from '../../../core/models/order.model';

@Component({
  selector: 'app-order-entry',
  standalone: true,
  imports: [],
  templateUrl: './order-entry.component.html',
  styleUrl: './order-entry.component.scss'
})
export class OrderEntryComponent {
  order: OrderModel = {
    OrderId: 1,
    CusId: 1,
    CusName: "Aung Aung",
    CusPhone: "09123",
    Township: "",
    Date: "2024-09-30",
    Discount: 0,
    NetTotal: 0,
    PaymentType: "",
    Total: 0,
  };
  orderJSON = JSON.stringify(this.order);

  constructor(private store: Store) { }

  onSetData(): void {
    this.store.dispatch(new SetOrder(this.order));
  }

}
