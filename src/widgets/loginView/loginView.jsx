import UXHeader from '../../components/UXHeader/UXHeader';
import UXTextbox from '../../components/UXTextbox/UXTextbox';
import UXButton from '../../components/UXButton/UXButton';
import './loginView.css';
import { useState } from 'react';

const LoginView = () => {
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  
  const handleLogin = () =>{
      console.log('Logged In.....');
  }
  
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
      <div className="loginItems">
        <UXButton
          id="loginSubmitBtn"
          variant="primary"
          text="Submit"
          onTap={() => handleLogin()}
        />
      </div>
    </div>
  );
};

export default LoginView;
