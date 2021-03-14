import React from 'react';

import SignIn from "../sign-in/sign-in.component";
import './sign-in-and-sign-up.styles.scss'
import SignUp from "../sign-up/sign-up.component";

const SignInAndSignUpPage = () => (
  <div className='sign-in-and-sign-up'> SIGN IN
    <SignIn/>
    <SignUp/>
  </div>
)


export default SignInAndSignUpPage;