import { Params } from "../../core/models/core.interface";

export class GetOrders {
  static readonly type = "[Order] GET";
  constructor(public payload?: Params) { }
}
