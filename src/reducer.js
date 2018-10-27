import axios from "axios";

var projectID = require("./data/projectID.json");
var districtID = require("./data/districtID.json");

var tmp = [];
for (var x in projectID) {
  var to_add = {};
  var project_detail = projectID[x];
  to_add.project_id = parseInt(x);
  to_add.project_name = project_detail["project_name_th"];
  if (project_detail["district_id"] == "nan") {
    to_add.district_id = -1;
    to_add.district_name = "nan";
    to_add.province_id = 25;
    to_add.province_name = "Prajinburi";
  } else {
    var district_id = parseInt(project_detail["district_id"]);
    to_add.district_id = district_id;
    to_add.district_name =
      districtID[district_id.toString()]["district_name_th"];
    to_add.province_id = parseInt(
      districtID[district_id.toString()]["province_id"]
    );
    to_add.province_name =
      districtID[district_id.toString()]["province_name_th"];
  }
  tmp.push(to_add);
}

var district_data = [{ name: "all", id: -1 }];
for (x in districtID) {
  to_add = {};
  to_add.name = districtID[x]["district_name_th"];
  to_add.id = parseInt(x);
  district_data.push(to_add);
}

const initstate = {
  data: tmp,
  data_district: district_data,
  show: tmp,
  rec: [],
  history: [],
  fliter: "all",
  filter_id: -1
};

export default (state = initstate, action) => {
  switch (action.type) {
    case "ADD_SHOW":
      const new_show = [];
      if (state.filter == "all") {
        return {
          ...state,
          show: state.data
        };
      }
      for (var i = 0; i < state.data.length; i++) {
        if (state.data[i]["district_name"] == state.filter) {
          new_show.push(state.data[i]);
        }
      }
      return {
        ...state,
        show: new_show
      };
    case "CHANGE_FILTER":
      return {
        ...state,
        filter: action.filter
      };
    case "LOOK":
      const h = [];
      if (state.history.length == 0) {
        h.push(action.id);
        h.push(action.id);
        h.push(action.id);
      } else {
        h[0] = state.history[1];
        h[1] = state.history[2];
        h[2] = action.id;
      }
      console.log(h);
      var payload = axios.get(
        "http://127.0.0.1:5000/predict/" + h[0] + "-" + h[1] + "-" + h[2]
      );
      var r = [];
      payload.then(o => {
        for (var da in o.data) {
          r.push(o.data[da]);
        }
        console.log(r);
      });
      console.log(payload);
      return {
        ...state,
        history: h,
        rec: r
      };
    default:
      return state;
  }
};

export const addShow = () => ({
  type: "ADD_SHOW"
});

export const changeFilter = f => ({
  type: "CHANGE_FILTER",
  filter: f
});

export const look = id => ({
  type: "LOOK",
  id: id
});
