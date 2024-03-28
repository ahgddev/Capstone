import {useState} from "react";
import axios from "axios";

function SignUp() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [signUpMessage, setSignUpMessage] = useState();

  async function attemptSignUp(){
    const options = {
      username,
      password,
      email
    };
    return axios.post("https://capstone-be-16oc.onrender.com/signup", options)
  }

 async function handleSubmit(event){
    event.preventDefault();
    const signUpData = await attemptSignUp();
    setSignUpMessage(signUpData.data.msg);
    localStorage.setItem('token', signUpData.data.token);
  }

  return (
    <div id="signUpContainer">
      <h1>Sign Up for Plant Parent</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" id="signUpUsername" placeholder="username" onChange={event => setUsername(event.target.value)}/>
        <input type="password" id="signUpPassword" placeholder="password" onChange={event => setPassword(event.target.value)}/>
        <input type="email" id="signUpEmail" placeholder="email" onChange={event => setEmail(event.target.value)}/>
        <button type="submit">Sign Up</button>
        <div id="msg"> {signUpMessage} </div>
      </form>
    </div>
  );
}

export default SignUp;