import React, { Component } from "react";
import { changeFilter, addShow } from "./reducer";
import { connect } from "react-redux";

class Filter extends Component {
  render() {
    return (
      <div>
        <select
          value={this.props.filter}
          onChange={e => {
            this.props.changeFilter(e.target.value);
            this.props.addShow();
          }}
        >
          {this.props.data_district.map(v => {
            return <option value={v.name}>{v.name}</option>;
          })}
        </select>
      </div>
    );
  }
}

const mapStateTpProps = state => ({
  filter: state.filter,
  data_district: state.data_district
});

const mapDispatchToprops = {
  changeFilter,
  addShow
};
export default connect(
  mapStateTpProps,
  mapDispatchToprops
)(Filter);
