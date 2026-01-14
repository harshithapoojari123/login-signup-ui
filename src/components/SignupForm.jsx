import { useState } from "react";

// SignupForm component
// props: switchToSignin => function to switch to signin form
const SignupForm = ({ switchToSignin }) => {
  // useState to track form input values
  const [formData, setFormData] = useState({
    username: "",  // store username input
    email: "",     // store email input
    phone: "",     // store phone input
    password: "",  // store password input
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
      <h2>Create an account</h2>

      {/* Username input */}
      <input
        type="text"
        name="username"
        placeholder="User Name"
        value={formData.username}   // controlled input
        onChange={handleChange}     // update state on typing
        required
      />

      {/* Email input */}
      <input
        type="email"
        name="email"
        placeholder="Email address"
        value={formData.email}      // controlled input
        onChange={handleChange}     // update state on typing
        required
      />

      {/* Phone input */}
      <input
        type="tel"
        name="phone"
        placeholder="Phone number"
        value={formData.phone}      // controlled input
        onChange={handleChange}     // update state on typing
      />

      {/* Password input */}
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}   // controlled input
        onChange={handleChange}     // update state on typing
        required
      />

      {/* Submit button */}
      <button type="submit" className="btn-submit">
        Create Account
      </button>

      {/* Switch to signin link */}
      <p className="switch-text">
        Already have an account?{" "}
        <span onClick={switchToSignin}>Login here</span> {/* call switchToSignin on click */}
      </p>
    </form>
  );
};

export default SignupForm;
