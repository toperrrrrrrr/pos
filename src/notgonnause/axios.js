import React, { useState } from 'react';
import "./axios.css";

function LoginForm() {
  const [isRegister, setIsRegister] = useState(false);

  const panelOneRef = React.useRef(null);
  const panelTwoRef = React.useRef(null);

  const toggleForm = () => {
    setIsRegister((prevIsRegister) => !prevIsRegister);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  React.useEffect(() => {
    const panelOneHeight = panelOneRef.current.offsetHeight;
    const panelTwoHeight = panelTwoRef.current.scrollHeight;

    if (!isRegister) {
      panelTwoRef.current.style.height = `${panelTwoHeight}px`;
    } else {
      panelTwoRef.current.style.height = 'auto';
    }

    return () => {
      panelTwoRef.current.style.height = `${panelOneHeight}px`;
    };
  }, [isRegister]);

  return (
    <div className="form">
      <div className="form-toggle">
        <button onClick={toggleForm}>{isRegister ? 'Login' : 'Register'}</button>
      </div>
      <div className={`form-panel one ${isRegister ? 'hidden' : ''}`} ref={panelOneRef}>
        <div className="form-header">
          <h1>Account Login</h1>
        </div>
        <div className="form-content">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required />
            </div>
            <div className="form-group form-remember">
              <input type="checkbox" />
              <label>Remember Me</label>
            </div>
            <div className="form-group">
              <a href="#">Forgot Password?</a>
            </div>
            <div className="form-group">
              <button type="submit">Log In</button>
            </div>
          </form>
        </div>
      </div>
      <div className={`form-panel two ${isRegister ? 'active' : ''}`} ref={panelTwoRef}>
        <div className="form-header">
          <h1>Register Account</h1>
        </div>
        <div className="form-content">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required />
            </div>
            <div className="form-group">
              <label htmlFor="cpassword">Confirm Password</label>
              <input type="password" id="cpassword" name="cpassword" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <button type="submit">Register</button>
            </div>
          </form>
        </div>
      </div>

      </div>
  );
}

export default LoginForm;