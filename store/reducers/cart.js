import { ADD_TO_CART } from "../actions/cart";
import CartItem from '../../models/cart-item';

const initialState = {
   items: {},
   totalAmount: 0
};


export default (state = initialState, action) => {
   switch (action.type) {
      case ADD_TO_CART: 
         const addedProduct = action.product;
         const prodPrice = addedProduct.price;
         const prodTitle = addedProduct.title;

         let updatedOrNewCartItem;

         if(state.items[addedProduct.id]) {
            //have item
            updatedOrNewCartItem = new CartItem(
               state.items[addedProduct.id].quantity + 1,
               prodPrice,
               prodTitle,
               state.items[addedProduct.id].sum + prodPrice
            );
            return {
               ...state,
               items: {...state.items, [addedProduct.id]: updatedOrNewCartItem},
               totalAmount: state.totalAmaunt + prodPrice
            }
         } else {
            updatedOrNewCartItem = new CartItem(1, prodPrice, prodTitle, prodPrice);
            return {
               ...state,
               items: {...state.items, [addedProduct.id]: updatedOrNewCartItem},
               totalAmount: state.totalAmaunt + prodPrice
            }
         }
   }
   return state;
}