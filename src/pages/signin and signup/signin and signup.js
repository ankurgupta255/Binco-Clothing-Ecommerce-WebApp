import React from 'react';
import Signin from '../../components/signin/signin.js';
import Signup from '../../components/signup/signup';

import './signin and signup.scss';

const SigninAndSignup=()=>{
  return(
    <div className='signinandsignup'><Signin /><Signup /></div>
  )
}

export default SigninAndSignup;
