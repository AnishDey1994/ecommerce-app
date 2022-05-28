import UXHeader from '../../components/UXHeader/UXHeader';
import UXTextbox from '../../components/UXTextbox/UXTextbox';
import UXButton from '../../components/UXButton/UXButton';
import UXValidation from '../../components/UXValidation/UXValidation';
import './registrationView.css';
import { useState } from 'react';

const RegistrationView = (props) => {
  const [fullName, setFullName] = useState(null);
  const [emailid, setEmailid] = useState(null);
  const [mobileNumber, setMobileNumber] = useState(null);
  const [password, setPassowrd] = useState(null);
  const [confirmPsw, setConfirmPsw] = useState(null);
  const [errors, setErrors] = useState(null);

  const handleSubmit = () => {
    let validForm = validation();
    console.log(validForm);
    if (
      validForm.fullName ||
      validForm.email ||
      validForm.password ||
      validForm.mobileNumber ||
      validForm.confirmPsw
    ) {
      setErrors(validForm);
    } else {
      console.log('User Register Successfully');
    }
  };

  const validation = () => {
    let errors = {};
    if (!fullName) {
      errors.fullName = '*Full Name is Required';
    }
    if (!emailid) {
      errors.emailid = '*Email is required';
    }
    if (!mobileNumber) {
      errors.mobileNumber = '*Mobile No. is required';
    }
    if (!password) {
      errors.password = '*Password is required';
    }
    if (!confirmPsw) {
      errors.confirmPsw = '*Confirm Password is required';
    }
    if (password !== confirmPsw) {
      errors.confirmPsw = '*Password should match';
    }
    return errors;
  };
  return (
    <div className='registrationPageWrapper'>
      <div className='registrationItems'>
        <UXHeader id='loginHeader' className='hh2' text='Registration' />
      </div>
      <div className='registrationItems'>
        <UXTextbox
          id='lregFullName'
          type='text'
          className='underLineTextBox'
          value={fullName}
          placeholder={'Full Name'}
          onEdit={(val) => setFullName(val)}
        />
        {errors && errors.fullName ? (
        <UXValidation
          id='errorFullName'
          className='danger'
          text={errors.fullName}
        />
      ) : null}
      </div>
      
      <div className='registrationItems'>
        <UXTextbox
          id='regEmail'
          type='email'
          className='underLineTextBox'
          value={emailid}
          placeholder={'Email'}
          onEdit={(val) => setEmailid(val)}
        />
        {errors && errors.emailid ? (
        <UXValidation
          id='errorEmailId'
          className='danger'
          text={errors.emailid}
        />
      ) : null}
      </div>
      <div className='registrationItems'>
        <UXTextbox
          id='regMobileNumber'
          type='text'
          className='underLineTextBox'
          value={mobileNumber}
          placeholder={'Mobile No.'}
          onEdit={(val) => setMobileNumber(val)}
        />
        {errors && errors.mobileNumber ? (
        <UXValidation
          id='errorMobileNumber'
          className='danger'
          text={errors.mobileNumber}
        />
      ) : null}
      </div>
      <div className='registrationItems'>
        <UXTextbox
          id='regLoginPassword'
          type='password'
          className='underLineTextBox'
          value={password}
          placeholder={'Password'}
          onEdit={(val) => setPassowrd(val)}
        />
        {errors && errors.password ? (
        <UXValidation
          id='errorPassword'
          className='danger'
          text={errors.password}
        />
      ) : null}
      </div>
      <div className='registrationItems'>
        <UXTextbox
          id='regConfirmPsw'
          type='password'
          className='underLineTextBox'
          value={confirmPsw}
          placeholder={'Confirm Password'}
          onEdit={(val) => setConfirmPsw(val)}
        />
        {errors && errors.confirmPsw ? (
        <UXValidation
          id='errorconfirmPsw'
          className='danger'
          text={errors.confirmPsw}
        />
      ) : null}
      </div>
      <div className='loginItems'>
        <UXButton
          id='loginSubmitBtn'
          variant='primary'
          text='Submit'
          onTap={() => handleSubmit()}
        />
        <div className='urlLink'>
          Already a user? <u onClick={() => props.handleView()}>Login</u> here
        </div>
      </div>
    </div>
  );
};
export default RegistrationView;
