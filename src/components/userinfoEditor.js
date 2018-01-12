import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import createUserinfo from "../actions/createUserinfo";
import NewIcon from "material-ui/svg-icons/content/add";
import SaveIcon from "material-ui/svg-icons/action/done";

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

  updateNumber(event, date) {
    this.setState({
      number: event.target.value
    });
  }

  updateStreet(event, date) {
    this.setState({
      street: event.target.value
    });
  }

  updateCity(event, date) {
    this.setState({
      city: event.target.value
    });
  }

  updateZipcode(event, date) {
    this.setState({
      zipcode: event.target.value
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
  saveAddress() {
    const { number, street, city, zipcode } = this.state;

    const address = { number, street, city, zipcode };

    
      this.props.createAddress(address);
    
  }



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
      <h2> Address </h2>
      <TextField
          type="text"
          ref="number"
          className="number"
          hintText="Type your house number here"
          value={this.state.number}
          onChange={this.updateNumber.bind(this)}
        />

      <TextField
          type="text"
          ref="street"
          className="street"
          hintText="Type your street here"
          value={this.state.street}
          onChange={this.updateStreet.bind(this)}
        />

      <TextField
          type="text"
          ref="city"
          className="city"
          hintText="Type your city here"
          value={this.state.city}
          onChange={this.updateCity.bind(this)}
        />
      
      <TextField
          type="text"
          ref="zipcode"
          className="zipcode"
          hintText="Type your zipcode here"
          value={this.state.zipcode}
          onChange={this.updateZipcode.bind(this)}
        />



      <br />
      <RaisedButton
          label="Save Address"
          primary={true}
          onClick={this.saveAddress.bind(this)}
          icon={<SaveIcon />}
        />
      <br />
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
