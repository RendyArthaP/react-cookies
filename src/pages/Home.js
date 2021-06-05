import Cookies from 'js-cookie'
import React from 'react'

const Home = () => {
  const users = JSON.parse(Cookies.get('user'))
  const { email } = users
  return (
    <div>
      <h1>
        Home Page
      </h1>
      <h1>
        Hello {email.slice(0,10)}
      </h1>
    </div>
  )
}

export default Home
