import "./login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter your email.."
        />
        <label>Password</label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter your password.."
        />
        <button className="loginButton">Login</button>
        <button className="loginRegisterButton">
          <Link className="link" to="/signup">
            Sign up
          </Link>
        </button>
      </form>
    </div>
  );
}
