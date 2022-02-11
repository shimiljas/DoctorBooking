import React from 'react';
import './Login.css';

function Login() {
  return <div className='login'>
      <div className='login__form'>
          <h1>Login</h1>
          <form>
              <h5>Phone no</h5>
              <input type="text" value="Phone no"/>
              <h5>Password</h5>
              <input type="password" value="password"/>
              <button type="submit">Login</button>
          </form>
          <input type="checkbox"/>
          <p>I agree to the Terms and Conditions of use and sale.
              Please check our Privacy policies and our cookie notice.
          </p>
      </div>
  </div>;
}

export default Login;

