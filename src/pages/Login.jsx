import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { UserContext } from "../UserContext";
import './login.css'
import Logo from "../assets/logo.png"


const Login = () => {
  const { user, setUser } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    

    //await fetch("https://eggerp-backend.herokuapp.com/user/login", {
    await fetch("https://nutriovos-backend.herokuapp.com/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        email,
        password,
      }),
      mode: 'cors',
    });

    //const response = await fetch("https://eggerp-backend.herokuapp.com/user", {
    const response = await fetch("https://nutriovos-backend.herokuapp.com/user", {

      headers: { "Content-Type": "application/json" },
      credentials: "include",
      mode: 'cors',
    });

    const content = await response.json();
    if(content)
    console.log(content)

    if (content._id) {
      setUser(content);
      setRedirect(true);
    }else{
      alert("Invalid Login, try again!")
    }

  };

  if (user) {
    return <Redirect to="/transaction" />;
  }
  if (redirect) {
    return <Redirect to="/transaction" />;
  }

  return (
    <div className="home">
    <div className="login-container" >
    <img className="logo" src={Logo} alt="logo"/>
    <div className="form-group">
      <form onSubmit={submit}>
        

        <input
          type="email"
          placeholder="name@example.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">
          Login
        </button>
        
      </form>
    </div>
    </div>
    {/* // Si vous n'avez pas de compte inscrivez-vous <Link to='/user_register'> */}
    </div>
  );
};

export default Login;

