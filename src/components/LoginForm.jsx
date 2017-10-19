import React, { Component } from 'react'
import { TextField, RaisedButton } from 'material-ui'

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: ''}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('Submitted: ', this.state);
  }

  hendleClick() {
    history.push('/register')
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <TextField
          hintText="Email"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <br />
        <TextField
          hintText="Password"
          name="password"
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <br />
        <RaisedButton label="Login" type="submit" primary={true} />
        <FlatButton label="Register" secondary={true} onClick={handleClick} />
      </form>
      </div>
    )
  }
}
