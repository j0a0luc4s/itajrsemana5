import React from "react";

import './LoginForm.css'
import '../css/utils/btn.css'

const LoginForm = props => {
  return (
    <div className="login-form">
      <h2>Login</h2>
      <form action="#">
        <div className="form-group">
          <label htmlFor="email">E-mail </label>
          <input type="text" name="email" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha </label>
          <input type="password" name="password" id="password" />
        </div>
        <div className="form-group">
          <button className="btn">Esqueci minha senha</button>
          <button className="btn">Login</button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm