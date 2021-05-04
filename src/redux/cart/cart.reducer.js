import { CartActionTypes } from './cart.types';
import { addItemToCart } from './cart.utils';
import { removeItemFromCart } from './cart.utils';

const initialState = {
	hidden: true,
	cartItems: [],
};

const cartReducer = (state = initialState, action) => {
	if (action.type === CartActionTypes.TOGGLE_CART_HIDDEN) {
		return {
			...state,
			hidden: !state.hidden,
		};
	}

	if (action.type === CartActionTypes.ADD_ITEM) {
		return {
			...state,
			cartItems: addItemToCart(state.cartItems, action.payload),
		};
	}

	if (action.type === CartActionTypes.REMOVE_ITEM) {
		return {
			...state,
			cartItems: removeItemFromCart(state.cartItems, action.payload),
		};
	}

	if (action.type === CartActionTypes.CLEAR_ITEM_FROM_CART) {
		return {
			...state,
			cartItems: state.cartItems.filter(
				(item) => item.id !== action.payload.id
			),
		};
	}

	return state;
};

export default cartReducer;
