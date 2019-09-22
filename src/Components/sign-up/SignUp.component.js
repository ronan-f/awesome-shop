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

  return (
    <div>
      <FormInput name="name" label="Name" _handleChange={_handleChange} value={state.name} requried />
      <FormInput name="email" label="Email" _handleChange={_handleChange} value={state.email} required />
      <FormInput name="password" label="password" _handleChange={_handleChange} value={state.password} required />
      <CustomButton>Sign Up</CustomButton>
    </div>
  );
}


export default SignUp;