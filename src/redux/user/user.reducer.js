import { UserActionTypes } from './user.types';

const initialState = {
	currentUser: null,
};

const userReducer = (state = initialState, action) => {
	if (action.type === UserActionTypes.SET_CURRENT_USER) {
		return {
			...state,
			currentUser: action.payload,
		};
	}

	return state;
};

export default userReducer;
