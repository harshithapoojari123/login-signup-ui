import { useState } from "react";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import "./styles/AuthModal.css"; // Keeping your styles

function App() {
  const [activeForm, setActiveForm] = useState("signup");

  return (
    <div className="modal-overlay">
      <div className="auth-modal">
        {activeForm === "signup" && (
          <SignupForm switchToSignin={() => setActiveForm("signin")} />
        )}

        {activeForm === "signin" && (
          <LoginForm switchToSignup={() => setActiveForm("signup")} />
        )}
      </div>
    </div>
  );
}

export default App;
