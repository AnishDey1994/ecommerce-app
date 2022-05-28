import UXHeader from "../../components/UXHeader/UXHeader";
import UXTextbox from "../../components/UXTextbox/UXTextbox";
import UXButton from "../../components/UXButton/UXButton";
import "./loginView.css";
import { useState } from "react";

const LoginView = () => {
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const [errors, setErrors] = useState(null);

  const handleSubmit = () => {
    let validForm = validation();
    console.log(validForm);
    if (validForm.userName || validForm.password) {
      setErrors(validForm);
    } else {
      console.log("Logged in");
    }
    console.log("**", errors);
  };

  const validation = () => {
    let errors = {};
    if (!userName) {
      errors.userName = "Email/username is required";
    }
    if (!password) {
      errors.password = "Password is required";
    }
    return errors;
  };

  return (
    <div className="loginWrapper">
      <div className="loginItems">
        <UXHeader id="loginHeader" className="hh2" text="Login" />
      </div>
      <div className="loginItems">
        <UXTextbox
          id="loginUserName"
          type="text"
          className="loginTextBox"
          value={userName}
          placeholder={"email/user name"}
          onEdit={(val) => setUserName(val)}
        />
      </div>
      <p className="errMsg">{errors && errors.userName}</p>
      <div className="loginItems">
        <UXTextbox
          id="loginPassword"
          type="password"
          className="loginTextBox"
          value={password}
          placeholder={"password"}
          onEdit={(val) => setPassword(val)}
        />
      </div>
      <p className="errMsg">{errors && errors.password}</p>
      <div className="loginItems">
        <UXButton
          id="loginSubmitBtn"
          variant="primary"
          text="Submit"
          onTap={() => handleSubmit()}
        />
      </div>
    </div>
  );
};

export default LoginView;
