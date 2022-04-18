import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_SAVE_PAYMENT_METHOD,
} from '../constants/cartConstants'

export const cartReducer = (
  state = { cartItems: [], shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload

      const existingCartItem = state.cartItems.find(
        (cartItem) => cartItem.id === item.id
      )
      if (existingCartItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((cartItem) =>
            cartItem.id === existingCartItem.id ? item : cartItem
          ),
        }
      } else {
        return { ...state, cartItems: [...state.cartItems, item] }
      }

    case CART_REMOVE_ITEM:
      const itemIdRemoved = action.payload
      const itemsAfterRemoved = state.cartItems.filter(
        (item) => item.id !== itemIdRemoved
      )
      return { ...state, cartItems: itemsAfterRemoved }

    case CART_SAVE_SHIPPING_ADDRESS:
      return { ...state, shippingAddress: action.payload }

    case CART_SAVE_PAYMENT_METHOD:
      return { ...state, paymentMethod: action.payload }

    default:
      return state
  }
}
