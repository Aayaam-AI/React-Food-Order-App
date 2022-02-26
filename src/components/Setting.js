import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../store";
import classes from "./Setting.module.css";

const format = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;

const checkSpecialCharacter = (str) => {
  if (format.test(str)) {
    return true;
  } else {
    return false;
  }
};

const Setting = (props) => {
  const [firstName, setFirstName] = useState(
    useSelector((state) => state.user.firstName)
  );
  const [lastName, setLastName] = useState(
    useSelector((state) => state.user.lastName)
  );
  const [phoneNumber, setPhoneNumber] = useState(
    useSelector((state) => state.user.phoneNumber)
  );

  const dispatch = useDispatch();

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");

  const firstNameHandler = (event) => {
    setFirstName(event.target.value);
    if (checkSpecialCharacter(event.target.value)) {
      setFirstNameError("First Name Should not contain special characters");
    } else {
      setFirstNameError("");
    }
  };

  const lastNameHandler = (event) => {
    setLastName(event.target.value);
    if (checkSpecialCharacter(event.target.value)) {
      setLastNameError("Last Name Should not contain special characters");
    } else {
      setLastNameError("");
    }
  };

  const phoneNumberHandler = (event) => {
    setPhoneNumber(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (firstName.length === 0) {
      setFirstNameError("First Name cannot be empty");
    }

    if (phoneNumber.length !== 10 || phoneNumber < 0) {
      setPhoneNumberError("Enter Valid Phone Number");
    } else if (
      firstNameError.length === 0 &&
      lastNameError.length === 0 &&
      phoneNumberError.length === 0
    ) {
      window.alert(
        JSON.stringify({
          Name: `${firstName} ${lastName}`,
          PhoneNumber: phoneNumber,
        })
      );

      dispatch(
        userActions.changeUser({
          firstName,
          lastName,
          phoneNumber,
        })
      );

      setFirstNameError("");
      setLastNameError("");
      setPhoneNumberError("");

      setFirstName("");
      setLastName("");
      setPhoneNumber("");
    }
  };

  return (
    <form onSubmit={submitHandler} className={classes.container}>
      <label htmlFor="fname">First Name</label>
      <input
        className={classes.text}
        onChange={firstNameHandler}
        value={firstName}
        type="text"
        id="fname"
        name="firstname"
        placeholder="Enter Your First Name"
      />
      {firstNameError.length > 0 && (
        <p className={classes.error}>{firstNameError}</p>
      )}

      <label htmlFor="lname">Last Name</label>
      <input
        className={classes.text}
        onChange={lastNameHandler}
        value={lastName}
        type="text"
        id="lname"
        name="lastname"
        placeholder="Enter Your Last Name"
      />
      {lastNameError.length > 0 && (
        <p className={classes.error}>{lastNameError}</p>
      )}

      <label htmlFor="number">Contact Number</label>
      <input
        className={classes.text}
        onChange={phoneNumberHandler}
        value={phoneNumber}
        type="number"
        id="number"
        name="number"
      />
      {phoneNumberError.length > 0 && (
        <p className={classes.error}>{phoneNumberError}</p>
      )}

      <label htmlFor="mail">Email ID</label>
      <input
        className={classes.text}
        type="email"
        id="mail"
        name="mailid"
        disabled="disables"
        value="example@xyz.com"
      />

      <input className={classes.submit} type="submit" />
    </form>
  );
};

export default Setting;
