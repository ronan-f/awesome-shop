import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import './SignUp.styles.scss';

const initialState = {
  displayName: "",
  email: "",
  password: ""
}

const SignUp = () => {
  const [state, setState] = React.useState(initialState);

  const _handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const _handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, { displayName })
      console.log("The user 2", user);
      setState(initialState);

    } catch(e) {
      console.error(e.message);
    }
  }

  const { displayName, email, password } = state;

  return (
    <div className="sign-up">
      <h2>I don't have an account</h2>
      <span>Sign up with your email/password</span>
      <form onSubmit={_handleSubmit}>
        <FormInput name="displayName" label="Display Name" _handleChange={_handleChange} value={displayName} required />
        <FormInput name="email" label="Email" _handleChange={_handleChange} value={email} required />
        <FormInput name="password" type="password" label="Password" _handleChange={_handleChange} value={password} required />
        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </div>
  );
}


export default SignUp;