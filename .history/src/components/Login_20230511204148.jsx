import {  useState } from "react";
import axio from "axios";
import { useNavigate, Link } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function submit(e) {
        e.preventDefault();
        try{
            await axio.post("http://localhost:517/", {
                email,password
            })
            .then((res) => {
                if(res.data.message === "User exists"){
                    navigate("/home", {state: {id: email}})
                }
                else{
                    alert("User does not exist")
                }
            })
            .catch((e) => {
                alert("Errrrrrr")
                console.log(e)
            }
            )
         }
         catch(e){
             console.log(e)
         }
    }

  return (
    <div className="login">
      <h1>Login</h1>
      <form>
        <input type="email" onChange={(e) => {setEmail(e.target.value);}} placeholder="email"/>
        <input type="password" onChange={(e) => {setPassword(e.target.value);}} placeholder="Password"/>
        <button type="submit" onClick={submit}>Login</button>
      </form>
      <br />
      <p>OR</p>
      <br />
      <Link to="/Signup">Signup</Link>
    </div>
  );

};

export default Login;
