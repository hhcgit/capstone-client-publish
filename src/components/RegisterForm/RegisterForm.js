import React, { useState, useContext } from 'react'
import AuthApiService from '../../services/auth-api-service'
import { Input } from '../../components/FormUtils/FormUtils'
import ScrollArea from 'react-scrollbar'
import UserContext from '../../contexts/UserContext'
import './RegisterForm.css'

export default function RegisterForm(props) {
  const [userName, setUserName] = useState('')
  const userContext = useContext(UserContext)
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const { onRegisterSuccess = () => {} } = props

  const handleNewUserSubmit = e => {
    e.preventDefault()
    setError(null)

    AuthApiService.postUser({
      username: userName,
      name,
      password
    })
    .then(() => {
      userContext.setUser({
        username:userName,
        name
      })
      onRegisterSuccess(userName, password)
    })
    .catch(res => {
      setError(res.error)
    })
  }
  
  return (
    <div className="register"> 
      <ScrollArea
        speed={0.8}
        className="Scrollable-register"
        horizontal={false}
        vertical={true}
        smoothScrolling={true}
      >
      <form className="register-form" onSubmit={handleNewUserSubmit}>
        <div className="red" role="alert">{error && <p>{error}</p>}</div>
        <Input
          onChange={e => setName(e.target.value)}
          id="register-name-input"
          type="text"
          name="name"
          placeholder="Name"
          aria-label="name"
          required
          />
        <Input
          onChange={e => setUserName(e.target.value)}
          id="register-username-input"
          type="text"
          name="username"
          aria-label="username"
          placeholder="Username"
          required
          />
        <Input
          onChange={e => setPassword(e.target.value)}
          id="register-password-input"
          type="password"
          name="password"
          aria-label="password"
          placeholder="Password"
          required
          />
        <button type="submit" className="register-button">
          Sign Up
        </button>
      </form>
      </ScrollArea>
    </div>
  )
}
