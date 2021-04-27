import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import firebase from "@/firebase";
import "firebase/auth";
import "firebase/firestore";
import { useAuth } from '@/services/context/auth';

export const Register = () => {
  const { setUser } = useAuth();
   const [values, setValues] = useState({
      username: "",
      email: "",
      password: "",
      phone: ""
    });
 
    const history = useHistory();
    const handleClick = () => {
       history.push("/login")
   }
   const handleChange = (event) => {
      event.persist();
      setValues(values => ({
        ...values,
        [event.target.name]: event.target.value
    }));
   }
    const handleSubmit = (event) => {
      event?.preventDefault();
      console.log(values, 'values');
      firebase
      .auth()
      .createUserWithEmailAndPassword(values.email, values.password)
      .then((userCredential) => {
          setUser(userCredential);
          const db = firebase.firestore();
          db.collection("Users")
           .doc(userCredential.user.uid)
           .set({
              email: values.email,
              username: values.username,
              phone: values.phone
         })
          .then(() => {
              console.log('ok');
              history.push("/admin");
         })
             .catch(error => {
                 console.log(error.message);
                 alert(error.message);
         });
    })
  } 
  return (
     <div style={{textAlign: 'center'}}>
     <h1>Sign Up</h1>
     <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" onChange={handleChange} /><br /><br />
        <input type="text" name="phone" placeholder="Phone" onChange={handleChange}/><br /><br />
        <input type="text" name="email" placeholder="Enter your Email" onChange={handleChange}/><br /><br />
        <input type="password" name="password" placeholder="Enter your Password" onChange={handleChange}/><br /><br />
        <button type="submit">Sign Up</button>
        <p>Already have account?</p>
        <button onClick={handleClick}>Login</button>
      </form>
     </div>
   );
}
export default Register;