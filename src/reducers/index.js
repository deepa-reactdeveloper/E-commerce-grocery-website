import {
    ADD_TO_CART,
    INCREMENT_PRODUCT_QUANTITY,
    DECREMENT_PRODUCT_QUANTITY,
    CHECKOUT_REQUEST,
    CHECKOUT_SUCCESS,
    CHECKOUT_FAILURE,
    RECEIVE_PRODUCTS
} from '../actions/types';

const initialState = {
    loading: false,
    cartItems : [],
    error: ""
}


export default function rootReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                loading: false,
                cartItems: action.payload,
                error: ""
            }

            case INCREMENT_PRODUCT_QUANTITY:
                let increaseitem = state.cartItems.find(increaseitem => increaseitem.productId === action.productId);
                increaseitem.quantity += 1;
    
                return  {
                    ...state
                }
    
            case DECREMENT_PRODUCT_QUANTITY:
                let decreaseitem = state.cartItems.find(decreaseitem => decreaseitem.productId === action.productId);
                decreaseitem.quantity -= 1;
        
                return  {
                  ...state
                }
        default: return state;
    }
}
