import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import createUserinfo from "../actions/createUserinfo";
import NewIcon from "material-ui/svg-icons/content/add";

class UserinfoEditor extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      gender: "",
      email: "",
      phone: "",
      address:"",
      errors: {}
    };
  }

  updateName(event) {
    this.setState({
      name: event.target.value
    });
  }

  updateGender(event, date) {
    this.setState({
      gender: event.target.value
    });
  }

  updateEmail(event, date) {
    this.setState({
      email: event.target.value
    });
  }

  updatePhone(event, date) {
    this.setState({
      phone: event.target.value
    });
  }

  updateAddress(event, date) {
    this.setState({
      address: event.target.value
    });
  }

  // validate(classroom) {
  //   const { batchNr } = classroom;

  //   let errors = {};
  //   if (!batchNr || batchNr === "")
  //     errors.batchNr = "Please type in batch number!";

  //   this.setState({
  //     errors
  //   });
  //   return Object.keys(errors).length === 0;
  // }

  saveUserinfo() {
    const { name, gender, email, phone, address } = this.state;

    const userinfo = { name, gender, email, phone, address };

    
      this.props.createUserinfo(userinfo);
    
  }

  render() {
    if (!this.props.signedIn) return null;
    return (
      <div className="CreateUserinfo">
        <TextField
          type="text"
          ref="name"
          className="name"
          hintText="Type your name here"
          value={this.state.name}
          onChange={this.updateName.bind(this)}
        />
      <br />
      <TextField
          type="text"
          ref="gender"
          className="gender"
          hintText="Type your gender(male/female)here"
          value={this.state.gender}
          onChange={this.updateGender.bind(this)}
        />
      <br />
      <TextField
          type="text"
          ref="email"
          className="email"
          hintText="Type your email here"
          value={this.state.email}
          onChange={this.updateEmail.bind(this)}
        />
      <br />
      <TextField
          type="text"
          ref="phone"
          className="phone"
          hintText="Type your phone number here"
          value={this.state.phone}
          onChange={this.updatePhone.bind(this)}
        />
      <br />
      <TextField
          type="text"
          ref="address"
          className="address"
          hintText="Type your address here"
          value={this.state.address}
          onChange={this.updateAddress.bind(this)}
        />

      <br />
        

        <RaisedButton
          label="Create Userinfo"
          primary={true}
          onClick={this.saveUserinfo.bind(this)}
          icon={<NewIcon />}
        />
      </div>
    );
  }
}

UserinfoEditor.propTypes = { signedIn: PropTypes.bool };

const mapStateToProps = ({ currentUser }) => ({
  signedIn: !!currentUser && !!currentUser._id
});

export default connect(mapStateToProps, { createUserinfo })(UserinfoEditor);
