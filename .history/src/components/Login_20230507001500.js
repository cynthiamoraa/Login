import { useEffect, useState } from "react";
import axio from "axios";
import { useNavigate, Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="login">
        <h1>Login</h1>
        <form>
            <input type="email" onChange={} placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
        </form>
        <Link to="/signup">Signup</Link>
    </div>
  )

};

export default Login;
