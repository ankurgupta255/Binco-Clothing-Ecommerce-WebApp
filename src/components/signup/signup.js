import React from 'react';

import FormInput from '../form/form.js';
import CustomButon from '../button/button.js';

import './signup.scss';

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

class Signup extends React.Component{
	constructor(){
		super()
		this.state={
			displayName: '',
			email: '',
			password: '',
			confirmPassword: ''
		}
	}

    handleSubmit=async event=>{
	    event.preventDefault()
	    const {displayName, email, password, confirmPassword}= this.state;
	    if(password !== confirmPassword){
	    	alert('Passwords Dont Match');
	    	return;
	    }
	    try{
	    	const {user}= await auth.createUserWithEmailAndPassword(email, password);
	    	await createUserProfileDocument(user, {displayName});
	    	this.setState({
	    		displayName: '',
	    		email: '',
	    		password: '',
	    		confirmPassword: ''
	    	})
	    } catch(error){
	    	console.log(error)
	    }
	  };

	  handleChange=event=>{
	    const {value,name}=event.target;
	    this.setState({[name]: value});
	  };

	render(){
		return(
			<div className='signup'>
	        <h2>I do not have an Account</h2>
	        <span>Sign Up with your email and password</span>
	        <form onSubmit={this.handleSubmit}>

	          <FormInput name="displayName" type="text" handleChange={this.handleChange} value={this.state.displayName} label="Name" required />

	          <FormInput name="email" type="email" handleChange={this.handleChange} value={this.state.email} label="Email" required />

	          <FormInput name="password" type="password"
	          handleChange={this.handleChange} value={this.state.password} label="Password"
	           required />

	           <FormInput name="confirmPassword" type="password"
	          handleChange={this.handleChange} value={this.state.confirmPassword} label="Confirm Password"
	           required />

	          <CustomButon type='submit'>Sign Up</CustomButon>
	        </form>
	        </div>
			)
	}
}

export default Signup;