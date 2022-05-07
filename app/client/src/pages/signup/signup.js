import { useState } from "react";
import { Link } from "react-router-dom";
import "./signup.css";
import axios from "axios"

export default function Signup() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [error, setError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(false)
    try {
      const res = await axios.post("/auth/signup", {username,email,password})
      res.data && window.location.replace("/login")
    } catch(err) {
      setError(true)
    }
  }
  
  return (
    <div className="signup">
      <span className="signupTitle">Sign up</span>
      <form className="signupForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          className="signupInput"
          type="text"
          placeholder="Enter your username.."
          onChange={e=> setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          className="signupInput"
          type="text"
          placeholder="Enter your email.."
          onChange={e=> setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          className="signupInput"
          type="password"
          placeholder="Enter your password.."
          onChange={e=> setPassword(e.target.value)}
        />
        <button className="signupButton" type="submit">Sign up</button>
        </form>
        <button className="signupLoginButton">
          <Link className="link" to="/login">
            Login
          </Link>
        </button>
     {error && <span style={{marginTop: "10px"}}>Something went wrong!</span>}
    </div>
  );
}
