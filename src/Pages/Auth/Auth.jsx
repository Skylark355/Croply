import React, { useState } from "react";
import "./Auth.css";
import google from "../../assets/Croply/google.png";
import facebook from "../../assets/Croply/facebookLogo.png";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // 👈 Eye icons
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [signupPassword, setSignupPassword] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [error, setError] = useState("");
  const [fullName, setFullName] = useState("");

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setError("");
    setSignupPassword("");
    setLoginPassword("");
    setShowPassword(false);
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const validatePassword = (value) => {
    setSignupPassword(value);
    const strongPasswordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!strongPasswordRegex.test(value)) {
      setError(
        "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character."
      );
    } else {
      setError("");
    }
  };

  const navigate = useNavigate();

  return (
    <div className="auth-container">
      {isLogin ? (
        <div className="login">
          <div className="login-left">
            <h1>Welcome Back</h1>

            <h2>Login</h2>
            <form>
              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^[A-Za-z\s]*$/.test(value)) {
                    setFullName(value);
                  }
                }}
                required
              />
              <div className="password-field">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
                <span className="eye-icon" onClick={togglePassword}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              <br />
              <button type="submit" className="submit">
                Login
              </button>
            </form>
            <p className="already">
              Already have an account?{" "}
              <button className="already-btn" onClick={toggleForm}>
                Sign Up
              </button>
            </p>
          </div>

          <div className="login-right">Croply</div>
        </div>
      ) : (
        <div className="signup">
          <div className="signup-left">
            <h1>Croply</h1>
          </div>

          <div className="signup-right">
            <h2>Create an Account</h2>

            <div className="signup-with">
              <div className="signup-btn">
                <img src={google} alt="" />
                <button className="signup-with-btn">Sign up with Google</button>
              </div>

              <div className="signup-btn">
                <img src={facebook} alt="" />
                <button className="signup-with-btn">
                  Sign up with Facebook
                </button>
              </div>
            </div>

            <h1 className="or">-OR-</h1>

            <form>
              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^[A-Za-z\s]*$/.test(value)) {
                    setFullName(value);
                  }
                }}
                required
              />
              <br />
              <input type="text" placeholder="Phone Number" />
              <br />
              <div className="password-field">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={signupPassword}
                  onChange={(e) => validatePassword(e.target.value)}
                />
                <span className="eye-icon" onClick={togglePassword}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              {error && (
                <p style={{ color: "red", fontSize: "0.8rem" }}>{error}</p>
              )}
              <br />

              <button
                type="submit"
                disabled={!!error}
                className="submit"
                onClick={() => {
                  navigate("/verify");
                }}
              >
                Create an Account
              </button>
            </form>
            <p className="already">
              Already have an account?{" "}
              <button className="already-btn" onClick={toggleForm}>
                Login
              </button>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Auth;
