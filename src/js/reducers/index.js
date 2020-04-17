import { SHOW_CUSTOMERS, SHOW_ADDRESSES } from '../constants/actions';

const initialState = {
	customers: [],
	addresses: []
};

export function rootReducer(state=initialState, action){
	// if (action.type === SHOW_CUSTOMERS) {
 //    	return Object.assign({}, state, {
	//       customers: state.customers.concat(action.payload)
	//     });
 //  	}

  	if (action.type === SHOW_ADDRESSES) {
    	return Object.assign({}, state, {
	      addresses: action.payload.slice(0)
	    });
  	}

  	if (action.type === SHOW_CUSTOMERS) {
	    return Object.assign({}, state, {
	      customers: state.customers.concat(action.payload)
	    });
  	}
  	return state;
};

//export default rootReducer;