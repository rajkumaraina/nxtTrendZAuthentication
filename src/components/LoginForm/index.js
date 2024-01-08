import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', errorMessage: false}

  usernameChange = event => {
    this.setState({username: event.target.value})
  }

  passwordChange = event => {
    this.setState({password: event.target.value})
  }

  submitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitButton = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.submitSuccess()
    } else {
      this.message = data.error_msg
      this.setState({errorMessage: true})
    }

    console.log(response)
  }

  render() {
    const {username, password, errorMessage} = this.state
    const error = errorMessage ? <p className="error">*{this.message}</p> : null
    return (
      <div className="loginMainContainer">
        <div className="loginContainer">
          <div className="formImg1">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="formLogoMain"
            />
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="loginImg"
          />
          <form className="formContainer" onSubmit={this.onSubmitButton}>
            <div className="formImg">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
                alt="website logo"
                className="formLogo"
              />
            </div>
            <label htmlFor="Username" className="labelElement">
              USERNAME
            </label>
            <input
              type="text"
              id="Username"
              className="Input"
              value={username}
              onChange={this.usernameChange}
              placeholder="Username"
            />
            <label htmlFor="Password" className="labelElement">
              PASSWORD
            </label>
            <input
              type="password"
              id="Password"
              className="Input"
              value={password}
              onChange={this.passwordChange}
              placeholder="Password"
            />
            <button className="loginButton" type="submit">
              Login
            </button>
            {error}
          </form>
        </div>
      </div>
    )
  }
}
export default LoginForm
