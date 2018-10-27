import React, { Component } from "react";
import { connect } from "react-redux";
class Rec extends Component {
  render() {
    return (
      <div className="container">
        <br />
        <br />
        <ul>
          {this.props.rec.map(v => {
            return (
              <li style={{ listStyleType: "None" }}>
                <h6>project name : {v.project_name_th}</h6>
                <br />
                <h6>district name : {v.district_name_th}</h6>
                <br />
                <h6>province name : {v.province_name_th}</h6>
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
  rec: state.rec
});

const mapDispatchToProps = {};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Rec);
