import { ShopActionTypes } from './shop.types';

const initilState = {
	collections: null,
};

const shopReducer = (state = initilState, actions) => {
	if (actions.type === ShopActionTypes.UPDATE_COLLECTION) {
		return {
			...state,
			collections: actions.payload,
		};
	}

	return state;
};

export default shopReducer;
