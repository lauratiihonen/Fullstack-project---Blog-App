import Home from "./pages/home/home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/single";
import Write from "./pages/write/write";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { context } from "./context/context";

function App() {
  const {user} = useContext(context)
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={user ? <Home /> : <Login />} />
        <Route exact path="/signup" element={user ? <Home /> : <Signup />} />
        <Route exact path="/write" element={user ? <Write /> : <Login />} />
        <Route exact path="/post/:postId" element={<Single />} />
      </Routes>
    </Router>
  );
}

export default App;
