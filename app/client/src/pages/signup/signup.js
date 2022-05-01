import { Link } from "react-router-dom";
import "./signup.css";

export default function Signup() {
  return (
    <div className="signup">
      <span className="signupTitle">Sign up</span>
      <form className="signupForm">
        <label>Username</label>
        <input
          className="signupInput"
          type="text"
          placeholder="Enter your username.."
        />
        <label>Email</label>
        <input
          className="signupInput"
          type="text"
          placeholder="Enter your email.."
        />
        <label>Password</label>
        <input
          className="signupInput"
          type="text"
          placeholder="Enter your password.."
        />
        <button className="signupLoginButton">
          <Link className="link" to="/login">
            Login
          </Link>
        </button>
        <button className="signupButton">Sign up</button>
      </form>
    </div>
  );
}
