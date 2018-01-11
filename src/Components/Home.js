import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import Paper from "material-ui/Paper";
import ClassIcon from "material-ui/svg-icons/action/class";
import Menu from "material-ui/Menu";
import MenuItem from "material-ui/MenuItem";

const style = {
  paper: {
    background: "#f1f9ed",
    width: "800px",

    float: "center",
    margin: "100px"
  },
  rightIcon: {
    textAlign: "center",
    lineHeight: "30px"
  }
};

class Home extends PureComponent {
  

  render() {
    return (
      <div className="ClassroomsOverview">
        <h1>Hello User</h1>

        
      </div>
    );
  }
}



export default Home;
