import UXHeader from '../../components/UXHeader/UXHeader';
import UXTextbox from '../../components/UXTextbox/UXTextbox';
import UXButton from '../../components/UXButton/UXButton';
import UXValidation from '../../components/UXValidation/UXValidation'
import './loginView.css';
import { useState } from 'react';

const LoginView = (props) => {
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const [errors, setErrors] = useState(null);

  const handleSubmit = () => {
    let validForm = validation();
    console.log(validForm);
    if (validForm.userName || validForm.password) {
      setErrors(validForm);
    } else {
      console.log('Logged in');
    }
    console.log('**', errors);
  };

  const validation = () => {
    let errors = {};
    if (!userName) {
      errors.userName = '*Email/username is required';
    }
    if (!password) {
      errors.password = '*Password is required';
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
          className={'underLineTextBox'}
          value={userName}
          placeholder={"email/user name"}
          onEdit={(val) => setUserName(val)}
        />
        {errors && errors.userName ? (
          <UXValidation
            id="errorUserName"
            className="danger"
            text={errors.userName}
          />
        ) : null}
      </div>
      <div className="loginItems">
        <UXTextbox
          id="loginPassword"
          type="password"
          className="underLineTextBox"
          value={password}
          placeholder={"password"}
          onEdit={(val) => setPassword(val)}
        />
        {errors && errors.password ? (
          <UXValidation
            id="errorPassword"
            className="danger"
            text={errors.password}
          />
        ) : null}
      </div>
      <div className="loginItems">
        <UXButton
          id="loginSubmitBtn"
          variant="primary"
          text="Submit"
          onTap={() => handleSubmit()}
        />
        <div className="urlLink">
          New user? <u onClick={() => props.handleView()}>Register</u> here
        </div>
      </div>
    </div>
  );
};

export default LoginView;
