import React from 'react';
import SignIn from '../../Components/sign-in/SignIn.component';
import SignUp from '../../Components/sign-up/SignUp.component';

import './SignInUp.styles.scss';

const SignInUp = () => (
  <div className="sign-in-and-sign-up">
    Sign In
    <SignIn />
    <SignUp />
   </div>
)

export default SignInUp;