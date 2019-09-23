import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './SignIn.styles.scss';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

const SignIn = () => {
  const initialState = {
    email: "",
    password: ""
  };

  const [form, updateForm] = React.useState(initialState);

  const { email, password } = form;

  const _handleChange = (e) => {
    updateForm({ ...form, [e.target.name]: e.target.value })
  }

  const _handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password)
    } catch(e) {
      console.error(e.message);
    }
    updateForm(initialState);
  }

  return (
    <div className="sign-in">
      <h2>I have an account</h2>
      <span>Sign in with email and password</span>

      <form onSubmit={_handleSubmit}>
        <FormInput name="email" _handleChange={_handleChange} label="Email" value={email} required />
        <FormInput name="password" type="password" _handleChange={_handleChange} label="Password" value={password} required />
        <div className="buttons">
          <CustomButton type="submit" value="Submit Form">Log In</CustomButton>
          <CustomButton onClick={ signInWithGoogle } isGoogleSignIn>Log In With Google</CustomButton>
        </div>
      </form>
    </div>
  )
}

export default SignIn;

