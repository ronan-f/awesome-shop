import React from 'react';

const SignIn = () => {
  const [form, updateForm] = React.useState({
    email: "",
    password: ""
  });

  const _handleChange = (e) => {
    updateForm({...form, [e.target.name]: e.target.value})
  }

  return (
    <div className="sign-in">
      <h2>I have an account</h2>
      <span>Sign in with email and password</span>

      <form>
        <input name="email" onChange={_handleChange} value={form.email} required />
        <label>Email</label>
        <input name="password" onChange={_handleChange} value={form.password} required />
        <label>Password</label>
      </form>
    </div>
  )
}

export default SignIn;

