import { useEffect, useState } from "react";
import axio from "axios";
import { useNavigate, Link } from "react-router-dom";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function submit(e) {
        e.preventDefault();
        try{
            await axio.post("http://localhost:5000/", {
                email,password
            })
         }
         catch(e){
             console.log(err)
         }
    }

  return (
    <div className="login">
      <h1>Login</h1>
      <form>
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="email"
        />
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
        />
        <input type="submit" onClick={submit}>Login</input>
      </form>
      <br />
      <p>OR</p>
      <br />
      <Link to="/signup">Signup</Link>
    </div>
  );

};

export default Login;
