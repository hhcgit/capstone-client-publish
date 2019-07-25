import React from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import Top from '../../components/Top/Top';
import { Redirect } from 'react-router-dom'
import TokenService from '../../services/token-service'
import './LoginRoute.css'

export default function LoginRoute(props) {
  const handleLoginSuccess = () => {
    console.log(TokenService.getAuthToken())
    const {location = {}, history={push: () => {}}} = props;
    const destination = (location.state || {}).from || '/'
    history.push(destination)
  }

  return (
    <>
    <Top/>
    <div className='login-parent'>
      {TokenService.hasAuthToken()? <Redirect to="/"/> : <></>}
      <section className='login-section'>
        <h1 className='login-Title'>Login</h1>
        <LoginForm onLoginSuccess={handleLoginSuccess} />
      </section>
    </div>
    </>
  )
}