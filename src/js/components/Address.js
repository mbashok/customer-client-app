import React, { Component } from "react";
import { connect } from "react-redux";
import { getAddresses } from "../actions/index";
import List from "./List";

export class Address extends Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
    // this.props.getAddresses();
  // }

  render() {
    return (
      <List items = {this.props.addresses}  type="address" />
    );
  }
}

function mapStateToProps(state) {
  return {
    addresses: state.addresses.slice(0)
  };
}

export default connect(mapStateToProps, { getAddresses })(Address);