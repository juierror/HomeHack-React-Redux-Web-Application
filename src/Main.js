import React, { Component } from "react";
import Filter from "./Filter";
import { connect } from "react-redux";
import { look } from "./reducer";

class Main extends Component {
  render() {
    return (
      <div className="container">
        <br />
        <Filter />
        <br />
        <ul>
          {this.props.show.map(v => {
            return (
              <li style={{ listStyleType: "None" }}>
                <h6>project name : {v.project_name}</h6>
                <br />
                <h6>district name : {v.district_name}</h6>
                <br />
                <h6>province name : {v.province_name}</h6>
                <br />
                <button
                  onClick={e => {
                    this.props.look(v.project_id);
                  }}
                >
                  look
                </button>
                <br />
                <hr />
                <br />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  show: state.show,
  data_district: state.data_district,
  history: state.history
});

const mapDispatchToProps = {
  look
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
