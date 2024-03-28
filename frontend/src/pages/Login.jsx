import {useState} from "react";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [loginMessage, setLoginMessage] = useState();

  async function attemptLogin(){
    const options = {
      username,
      password
    };
    return axios.post("https://capstone-be-16oc.onrender.com/login", options)
  }

 async function handleSubmit(event){
    event.preventDefault();
    const tokenData = await attemptLogin();
    setLoginMessage(tokenData.data.msg);
    localStorage.setItem('token', tokenData.data.token);
    localStorage.setItem('avatar', tokenData.data.useravatar);
    localStorage.setItem('username', tokenData.data.usersname);
  }

  return (
    <div id="loginContainer">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" id="loginUsername"  placeholder="Username" onChange={event => setUsername(event.target.value)}/>
        <input type="password" id="loginPassword" placeholder="Password" onChange={event => setPassword(event.target.value)}/>
        <button type="submit">Log In</button>
        {loginMessage}
      </form>
    </div>
  );
}

export default Login;
