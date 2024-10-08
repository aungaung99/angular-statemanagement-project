# Angular-Statemanagement-Project

### Main Feature (State - Using @Ngxs/Store)
Data sharing parent and child component with single state

```js

@Selector()
static orders(state: OrderStateModel) {
  return state.orders;
}

@Action(GetOrders)
getOrders(ctx: StateContext<OrderStateModel>, action: GetOrders) {

  // Get Data from API
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

@Action(SetOrder)
setOrder(ctx: StateContext<OrderStateModel>, action: SetOrder) {

  // Set data from action payload
  if (action.payload !== undefined) {
      const state = ctx.getState();
      ctx.setState({
        ...state,
        orders: [...state.orders, action.payload]
      });
  }
}
```

![image](https://github.com/user-attachments/assets/a6265bf8-6954-4da5-b458-caa34fd7809a)


