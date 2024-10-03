import React, { useState } from "react";
import "../styles/SignIn.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false); // New state to track login status

  const loginFn = async (event) => {
    event.preventDefault();
    setIsLoggingIn(true); // Set login state to true when starting the login process

    const api = "AIzaSyDHO9-l6UOCnT2HN7EdAJczOb3Se8LDTQY";

    const raw = JSON.stringify({
      email: email.trim(),
      password: password.trim(),
      returnSecureToken: true,
    });

    const requestOptions = {
      method: "POST",
      body: raw,
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${api}`,
        requestOptions
      );
      const result = await response.json();

      if (result.idToken) {
        alert("Welcome Back, We Missed You 🥹");
        localStorage.setItem("idToken", result.idToken);
        window.location.href = "./index.html"; // Redirect to homepage
      } else {
        alert("Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error("Login error", error);
    } finally {
      setIsLoggingIn(false); // Reset login state after login attempt
    }
  };

  return (
    <div className="sign-in-container">
      <div className="signin-left">
        <div className="left-content">
          <img
            width="64"
            height="64"
            src="https://img.icons8.com/glyph-neue/64/behance.png"
            alt="behance"
          />
          <p><i class="fa-brands fa-behance"></i>hance</p>
        </div>
      </div>

      <div className="sign-in-box">
        <h2>Sign in</h2>
        <p>
          New user? <a href="/create-account">Create an account</a>
        </p>

        <form onSubmit={loginFn}>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
            required
          />

          <button
            type="submit"
            className="continue-btn"
            disabled={isLoggingIn} // Disable button while logging in
          >
            {isLoggingIn ? "Logging in..." : "Continue"} {/* Show spinner or text */}
          </button>
        </form>

        <div className="or-separator">Or</div>

        <div className="social-buttons">
          <button className="social-btn google"><i class="fa-brands fa-google"></i> Continue with Google</button>
          <button className="social-btn facebook"><i class="fa-brands fa-facebook"></i> Continue with Facebook</button>
          <button className="social-btn apple"><i class="fa-brands fa-apple"></i> Continue with Apple</button>
        </div>

        <a href="/help-sign-in" className="help-link">
          Get help signing in
        </a>
      </div>
    </div>
  );
};

export default SignIn;
