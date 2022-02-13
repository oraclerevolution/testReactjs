import React,{useState} from 'react';
import {Link, useNavigate } from "react-router-dom";
import {setToken, fetchToken} from '../middleware/auth'

const Login = () => {

    const navigate = useNavigate()
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    let handleSubmit = async (e) => {
        
        e.preventDefault();
        try {
          let res = await fetch("http://127.0.0.1:3000/users/auth", {
            method: "POST",
            body: JSON.stringify({
              username: login,
              password: password,
            }),
            headers: { 'Content-Type': 'application/json' },
          });
          let resJson = await res.json();
          if (res.status === 200) {
            //console.log(resJson);
            setToken(resJson[0].id)
            navigate('/movie',resJson);
          } else {
            setMessage("Une erreur s'est produite");
          }
        } catch (err) {
          console.log(err);
        }
    };

  return (
    <>
    <div className="wrapper fadeInDown">
        <div id="formContent">
            <h2>Connectez vous</h2>
        <br/>
        <br/>
            <form onSubmit={handleSubmit}>
                <input type="text" id="login" className="fadeIn second form-control" name="username" value={login} onChange={(e) => setLogin(e.target.value)} placeholder="username" />
                <br/>
                <input type="password" id="password" className="fadeIn third form-control" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" />
                <br/>
                <input type="submit" className="btn btn-primary" value="Log In" />
                
            </form>

            <div id="formFooter">
                <Link to="/register">Pas de compte ? Inscrivez vous</Link>
            </div>

        </div>
    </div>
    
    </>
  );
};

export default Login;