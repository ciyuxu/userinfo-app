import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import signOut from "../actions/user/sign-out";
import AppBar from "material-ui/AppBar";
import FlatButton from "material-ui/FlatButton";
import { palette } from "../styles/theme"
const style = {
    dropdown: {
        background: "#ffffff",
      
    }
    
  };


class Navbar extends PureComponent {
  signOut(event) {
    event.preventDefault();
    this.props.signOut();
    this.goHome();
  }

  signUp() {
    this.props.push("/sign-up");
  }

  signIn() {
      this.props.push("/sign-in");
  }
  goHome() {
    this.props.push("/");
  }
  
  render() {
    const { signedIn } = this.props;
    return (
      <AppBar
        title="userinfo-app"
        iconElementRight={
          signedIn ? (
            <FlatButton label="Sign out" onClick={this.signOut.bind(this)} />
          ) : (
              <div style={style.dropdown} classname="dropdown">
                <FlatButton label="Sign in" onClick={this.signIn.bind(this)} />
                <FlatButton label="Sign up" onClick={this.signUp.bind(this)} />
             </div>
          )
        }
      />
    );
  }
}
Navbar.propTypes = {
  signedIn: PropTypes.bool.isRequired
};

const mapStateToProps = ({ currentUser }) => ({
  signedIn: !!currentUser && !!currentUser._id
});

export default connect(mapStateToProps, { push, signOut })(Navbar);
