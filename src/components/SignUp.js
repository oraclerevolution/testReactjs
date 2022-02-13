import React,{useState, useEffect} from 'react';
import {Link } from "react-router-dom";

const SignUp = () => {

    const [email, setEmail] = useState("");
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    let handleSubmit = async (e) => {
        
        e.preventDefault();
        try {
          let res = await fetch("http://127.0.0.1:3000/users/signup", {
            method: "POST",
            body: JSON.stringify({
              email: email,
              username: login,
              password: password,
            }),
            headers: { 'Content-Type': 'application/json' },
          });
          let resJson = await res.json();
          if (res.status === 200) {
            setMessage("Votre compte a bien été crée")
            setEmail("");
            setLogin("");
            setPassword("");
          } else {
            setMessage("Une erreur s'est produite");
          }
        } catch (err) {
          console.log(err);
        }
    };

    return (
        <div className="wrapper fadeInDown">
            <div id="formContent">
                <h2>Inscrivez vous</h2>
            <br/>
            <br/>
            <form onSubmit={handleSubmit}>
                <input type="email" id="email" className="fadeIn second form-control" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />
                <br/>
                <input type="text" id="login" className="fadeIn second form-control" name="username" value={login} onChange={(e) => setLogin(e.target.value)} placeholder="login" />
                <br/>
                <input type="password" id="password" className="fadeIn third form-control" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" />
                <br/>
                <button type='submit' className='btn btn-primary'>Sign Up</button>

                <br/>
                
            </form>

            <div id="formFooter">
                <Link to="/">Vous avez un compte ? Connectez vous</Link>
            </div>

            </div>
        </div>
    );
};

export default SignUp;