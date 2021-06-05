import Cookies from 'js-cookie'
import React, { useState } from 'react'

const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: ""
  })
  const [auth, setAuth] = useState(false)

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    })
  }

  const handleLogin = (e) => {
    e.preventDefault();
    Cookies.set("user", login)
    Cookies.set("token", "1234568")
    setAuth(true)
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>
            Email
          </label>
          <input 
            type="text"
            value={login.email}
            name="email"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>
            Password
          </label>
          <input 
            type="password"
            value={login.password}
            name="password"
            onChange={handleChange}
          />
        </div>
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Login
