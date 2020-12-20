import { createSelector } from "reselect";

// Two type of selectors
// 1. Input selectors
// 2. Output selectors / Memoized selector
const selectCart = (state) => state.cart;

export const selectCartItem = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItem],
  (cartItems) =>
    cartItems.reduce(
      (accumulatorQuantity, cartItem) =>
        accumulatorQuantity + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector([selectCartItem], (cartItems) =>
  cartItems.reduce(
    (accumulatorQuantity, cartItem) =>
      accumulatorQuantity + cartItem.quantity * cartItem.price,
    0
  )
);
