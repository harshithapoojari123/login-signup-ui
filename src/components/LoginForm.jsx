import { useState } from "react";

// LoginForm component
// props: switchToSignup => function to switch to signup form
const LoginForm = ({ switchToSignup }) => {
  // useState to track form input values
  const [formData, setFormData] = useState({
    email: "",      // store email input
    password: "",   // store password input
  });

  // handleChange => update formData when user types
  const handleChange = (e) => {
    const { name, value } = e.target; // get input name and value
    setFormData((prev) => ({ ...prev, [name]: value })); // update corresponding field
  };

  // handleSubmit => trigger when form is submitted
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    alert(`Form submitted: ${JSON.stringify(formData, null, 2)}`); // show form data
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      {/* Form title */}
      <h2>Welcome back</h2>

      {/* Email input */}
      <input
        type="email"
        name="email"
        placeholder="Email address"
        value={formData.email}    // controlled input
        onChange={handleChange}   // call handleChange on typing
        required
      />

      {/* Password input */}
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password} // controlled input
        onChange={handleChange}   // call handleChange on typing
        required
      />

      {/* Submit button */}
      <button type="submit" className="btn-submit">
        Sign in
      </button>

      {/* Switch to signup link */}
      <p className="switch-text">
        Don’t have an account?{" "}
        <span onClick={switchToSignup}>Sign up here</span> {/* call switchToSignup on click */}
      </p>
    </form>
  );
};

export default LoginForm;
