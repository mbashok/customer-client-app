// Redux action creators

import { SHOW_CUSTOMERS, SHOW_ADDRESSES } from '../constants/actions';

export function getCustomers() {
  return function(dispatch) {
    return fetch("http://localhost:3001/customers")
      .then(response => {
      	return response.json();
      })
      .then(json => {
      	console.log("Result:", json);
        dispatch({ type: SHOW_CUSTOMERS, payload: json.customers });
      })
      .catch( (error)=> {
      	console.log('Server Error: ', error.message);
      });
  };
}

export function getAddresses(id) {
  return function(dispatch) {
    return fetch(`http://localhost:3001/customers/${id}/addresses`)
      .then(response => {
      	return response.json();
      })
      .then(json => {
      	console.log("Result:", json);
        dispatch({ type: SHOW_ADDRESSES, payload: json.addresses });
      })
      .catch( (error)=> {
      	console.log('Server Error: ', error.message);
      });
  };
}