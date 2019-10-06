import React from 'react';

import FormInput from '../form/form.js';
import CustomButon from '../button/button.js';

import './signin.scss';
import { signInWithGoogle } from '../../firebase/firebase.utils.js';

class Signin extends React.Component{
  constructor(props){
    super(props)
    this.state={
      email: '',
      password: ''
    }
  }

  handleSubmit=event=>{
    event.preventDefault()
    this.setState({email: '', password: ''})
  };

  handleChange=event=>{
    const {value,name}=event.target;
    this.setState({[name]: value});
  };

  render(){
    return(
      <div className='signin'>
        <h2>I already have an Account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput name="email" type="email" handleChange={this.handleChange} value={this.state.email} label="Email" required />

          <FormInput name="password" type="password"
          handleChange={this.handleChange} value={this.state.password} label="Password"
           required />

          <CustomButon type='submit'>Sign In</CustomButon>
          <CustomButon onClick={signInWithGoogle}>Sign In with Google</CustomButon>
        </form>
        </div>
    )
  }
}

export default Signin;
