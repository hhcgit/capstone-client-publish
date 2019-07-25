import React, { useContext } from 'react'
import RegisterForm from '../../components/RegisterForm/RegisterForm'
import TokenService from '../../services/token-service'
import { Redirect } from 'react-router-dom'
import UserContext from '../../contexts/UserContext'
import AuthApiService from '../../services/auth-api-service'
import Top from '../../components/Top/Top'
import './RegisterRoute.css'

export default function RegisterRoute(props) {
  const userContext = useContext(UserContext)

  const handleRegisterSuccess = (username, password) => {
    return AuthApiService.postLogin({
      username,
      password
    })
      .then(res => {
        userContext.processLogin(res.authToken)

        const { location = {}, history = { push: () => {} } } = props
        const destination = (location.state || {}).from || '/dashboard'
        history.push(destination)
      })
      .catch(res => alert(res.error))
  }

  return (
    <>
    <Top />
    <div className="register-parent">
      {TokenService.hasAuthToken() ? <Redirect to="/" /> : <></>}
      <section className="register-section">
        <h1 className="register-Title">Sign Up</h1>
        <RegisterForm onRegisterSuccess={handleRegisterSuccess} />
      </section>
    </div>
    </>
  )
}