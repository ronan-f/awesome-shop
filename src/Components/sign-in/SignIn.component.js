import React from 'react';

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
        <input name="email" onChange={_handleChange} value={form.email} required />
        <label>Email</label>
        <input name="password" onChange={_handleChange} value={form.password} required />
        <label>Password</label>

        <button type="submit" value="Submit Form">Log In</button>
      </form>
    </div>
  )
}

export default SignIn;

