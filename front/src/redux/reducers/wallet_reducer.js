import {
	MAKE_PAYMENT,
	LOAD_WALLET,
	ERROR_LOAD,
	ERROR_LOAD_CLEAR,
	ERRORS_CLEAR,
	VALIDATE_PAYMENT,
} from '../constants';

const initialState = {
	payment: {},
	errors: {},
};

export default (state = initialState, action) => {
	switch (action.type) {
		case MAKE_PAYMENT:
			return { ...state, payment: action.payment };
		case VALIDATE_PAYMENT:
			return { ...state, payment: action.payment };
		case LOAD_WALLET:
			return { ...state, payment: action.payment };
		case ERROR_LOAD:
			return { ...state, errors: { ...state.errors, load: action.message } };
		case ERROR_LOAD_CLEAR:
			return { ...state, errors: { ...state.errors, load: null } };
		case ERRORS_CLEAR:
			return { ...state, errors: {} };
		default:
			return state;
	}
};
