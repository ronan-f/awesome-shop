import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './SignIn.styles.scss';

const SignIn = () => {
  const initialState = {
    email: "",
    password: ""
  };

  const [form, updateForm] = React.useState(initialState);

  const _handleChange = (e) => {
    updateForm({...form, [e.target.name]: e.target.value})
  }

  const _handleSubmit = (e) => {
    e.preventDefault();
    updateForm(initialState);
  }

  return (
    <div className="sign-in">
      <h2>I have an account</h2>
      <span>Sign in with email and password</span>

      <form onSubmit={_handleSubmit}>
        <FormInput name="email" _handleChange={_handleChange} label="Email" value={form.email} required />
        <FormInput name="password" type="password" _handleChange={_handleChange} label="Password" value={form.password} required />
        <CustomButton type="submit" value="Submit Form">Log In</CustomButton>
      </form>
    </div>
  )
}

export default SignIn;

