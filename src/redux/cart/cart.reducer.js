import { CartActionTypes } from './cart.types';

const initialState = {
	hidden: true,
};

const cartReducer = (state = initialState, action) => {
	if (action.type === CartActionTypes.TOGGLE_CART_HIDDEN) {
		return {
			...state,
			hidden: !state.hidden,
		};
	}
	return state;
};

export default cartReducer;
