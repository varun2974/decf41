import React, { useState } from 'react';
import './SignUpForm.css';
// import SignUpForm from './SignUpForm';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailValidated, setEmailValidated] = useState(false);
  const [passwordValidated, setPasswordValidated] = useState(false);
  const [confirmPasswordValidated, setConfirmPasswordValidated] = useState(false);

  //this is for handle the email validatation 
  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setEmailValidated(validateEmail(newEmail));
  };

  // this function validate if the email has a correct format
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordValidated(newPassword.length >= 8);
  };

  //this function check the password validation - its is match or not  
  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    setConfirmPasswordValidated(newConfirmPassword === password);
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailValidated && passwordValidated && confirmPasswordValidated) {
      alert('Form submitted successfully');
    } else {
      alert("Can't submit the form");
    }
  };

  const validateEmail = (email) => {
    // Basic email validation regex (change as needed)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className='main'>
    <div className='center-content'>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            style={{ border: emailValidated ? '1px solid green' : '1px solid red' }}
          />
          {!emailValidated && <span style={{ color: 'red' }}>Please enter a valid email</span>}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            style={{ border: passwordValidated ? '1px solid green' : '1px solid red' }}
          />
          {!passwordValidated && <span style={{ color: 'red' }}>Password must be at least 8 characters long</span>}
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            style={{ border: confirmPasswordValidated ? '1px solid green' : '1px solid red' }}
          />
          {!confirmPasswordValidated && <span style={{ color: 'red' }}>Passwords do not match</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
      <br></br>
      <p>
        Already have an account?<a href="/login"> Login here.</a>
      </p>
      </div>
    </div>
  );
};

export default App;
