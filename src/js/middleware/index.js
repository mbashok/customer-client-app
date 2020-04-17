import { SHOW_CUSTOMERS } from '../constants/actions';


export function validationMiddleware({ dispatch }) {
  return function(next){
    return function(action){

		if (action.type === SHOW_CUSTOMERS) {
	        if (action.payload.length === 0) {
	          return dispatch({ type: "NO_RECORDS_FOUND" });
	        }
      	}
      
  		return next(action);
    }
  }
}