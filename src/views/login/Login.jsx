import React from 'react'

import '../../css/utils/view.css'
import '../../css/utils/container.css'
import './Login.css'

import LoginForm from '../../components/LoginForm'

const Login = props => (  
  <div className="login view">
    <div className="container">
      <LoginForm />
    </div>
  </div>
)

export default Login