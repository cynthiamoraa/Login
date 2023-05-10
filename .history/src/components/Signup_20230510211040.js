import { useEffect, useState } from "react";
import axio from "axios";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();
    try {
      await axio.post("http://localhost:5000/Signup", {
        email,
        password,
      });
      .then((res) => {
        if (res.data.message === "User exists") {
          alert("User exists");
        } else {
          navigate("/home", { state: { id: email } });
        }
      }).catch((e) => {
        alert("Error in logging in");
        console.log(e);
      });
    } 
    catch (e) {
      console.log(e);
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
        <input type="submit" onClick={submit}>
          Login
        </input>
      </form>
      <br />
      <p>OR</p>
      <br />
      <Link to="/">Login</Link>
    </div>
  );
};

export default Signup;
