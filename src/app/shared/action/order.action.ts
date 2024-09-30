import { Params } from "../../core/models/core.interface";
import { OrderModel } from "../../core/models/order.model";

export class GetOrders {
  static readonly type = "[Order] GET";
  constructor(public payload?: Params) { }
}

export class SetOrder {
  static readonly type = "[Order] SET";
  constructor(public payload: OrderModel) { }
}
