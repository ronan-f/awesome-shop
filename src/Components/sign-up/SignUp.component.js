import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

const initialState = {
  name: "",
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

  const { name, email, password } = state;

  return (
    <div>
      <h2>I don't have an account</h2>
      <span>Sign up with your email/password</span>
      <FormInput name="name" label="Name" _handleChange={_handleChange} value={name} requried />
      <FormInput name="email" label="Email" _handleChange={_handleChange} value={email} required />
      <FormInput name="password" label="password" _handleChange={_handleChange} value={password} required />
      <CustomButton type="submit">Sign Up</CustomButton>
    </div>
  );
}


export default SignUp;