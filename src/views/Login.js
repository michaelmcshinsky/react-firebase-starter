import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import firebase from "@/firebase";
import "firebase/auth";
import "firebase/firestore";
import { useAuth } from '@/services/context/auth';

export const Login = () => {
    const { setUser } = useAuth();
    const history = useHistory();
    const [state, setState] = useState({
        email: "",
        password: ""
    });
    const handleClick = () => {
      history.push("/register");
    }
    const handleChange = (event) => {
      event.persist();
      setState(state => ({
          ...state,
          [event.target.name]: event.target.value
    }));
   }
   const handleSubmit = (event) => {
      event.preventDefault();
      firebase
      .auth()
      .signInWithEmailAndPassword(state.email, state.password)
      .then(res => {
        setUser(res);
        console.log(res, 'res')
        history.push("/admin");
     })
      .catch(error => {
      console.log(error.message);
      alert(error.message);
     });
   }
  
  return (
     <div style={{textAlign: 'center'}}>
     <h1>Login</h1>
     <form onSubmit={handleSubmit}>
      <input type="text" name="email" value={state.email}     placeholder="Enter your Email" onChange={handleChange} /><br /><br />
      <input type="password" name="password" value={state.password} placeholder="Enter your Password" onChange={handleChange} /><br /><br />
      <button>Login</button>
      <p>Not logged in yet?</p>
      <button onClick={handleClick}>SignUp</button>
     </form>
   </div>
  );
}

export default Login;