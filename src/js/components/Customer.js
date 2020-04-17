// Customer component.
// To show the list of customers

import React, { Component } from "react";
import { connect } from "react-redux";
import { getCustomers, getAddresses } from "../actions/index";
import List from "./List";

export class Customer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getCustomers();
  }

  clickHandler = (customerId)=>{
    console.log(customerId);
    this.props.getAddresses(customerId);
  }

  render() {
    return (
      <List items = {this.props.customers} 
        handler={this.clickHandler} type="customer"/>
    );
  }
}

function mapStateToProps(state) {
  return {
    customers: state.customers.slice(0, 10)
  };
}

export default connect(mapStateToProps, { getCustomers, getAddresses })(Customer);