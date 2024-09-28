import { Action, Selector, State, StateContext, Store } from "@ngxs/store";
import { OrderModel } from "../../core/models/order.model";
import { Injectable } from "@angular/core";
import { OrderService } from "../../core/services/order.service";
import { GetOrders } from "../action/order.action";
import { tap } from "rxjs";

export class OrderStateModel {
  orders = [] as OrderModel[]
  selectedOrder!: OrderModel | null;
}

@State<OrderStateModel>({
  name: "order",
  defaults: {
    orders: [],
    selectedOrder: null,
  }
})
@Injectable()
export class OrderState {

  constructor(private store: Store,
    private orderService: OrderService
  ) { }

  @Selector()
  static orders(state: OrderStateModel) {
    return state.orders;
  }

  @Selector()
  static selectedOrder(state: OrderStateModel) {
    return state.selectedOrder;
  }

  @Action(GetOrders)
  getOrders(ctx: StateContext<OrderStateModel>, action: GetOrders) {
    this.orderService.skeletonLoader = true;
    return this.orderService.getOrders(action.payload).pipe(
      tap({
        next: result => {
          ctx.patchState({
            orders: result,
          });

          this.orderService.skeletonLoader = false;
        },
        error: (err) => { },
        complete: () => { this.orderService.skeletonLoader = false; }
      })
    );
  }
}
