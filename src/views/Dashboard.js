import React from "react";
import { useHistory } from "react-router-dom";
import firebase from "@/firebase";
import "firebase/firestore";

export const Dashboard = () => {
   const history = useHistory();
   const handleClick = (event) => {
      event.preventDefault();
      
      firebase
      .auth()
      .signOut()
      .then(res => {
         history.push("/login");
       })
    }
  return (
    <div style={{textAlign: 'center'}}>
    <h1>Dashboard</h1>
    <h2>Welcome to Dashboard!</h2><br/><br/>
    <button onClick={handleClick}>Logout</button>
    </div>
   );
}
export default Dashboard;