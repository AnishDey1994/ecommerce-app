import LoginView from '../loginView/loginView';
import RegistrationView from '../registrationView/registrationView';
import './preLoginView.css';
import { useState } from 'react';

const PreLoginView = () => {
  const [viewName, setViewName] = useState('login');

  const handleLogin = () => {
    console.log('Logged In.....');
  };

  return (
    <div className='preLoginWrapper'>
      <div className='preLoginItems rightBorder'></div>
      <div className='preLoginItems leftBorder'>
        {viewName === 'login' ? (
          <LoginView handleView={() => setViewName('registration')} />
        ) : (
          <RegistrationView handleView={() => setViewName('login')} />
        )}
      </div>
    </div>
  );
};

export default PreLoginView;
