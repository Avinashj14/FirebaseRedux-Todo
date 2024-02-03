// Dashboard.js

import React, { useEffect } from "react";
import NavBar from "../nav/Navbar";
import {signOutUser, signUp} from "../../actions/authActions"
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import TaskForm from "../todo/AddTask";
//import {addSampleData, addTodo} from "../../actions/todoActions"
import { addTodo} from "../../actions/todoActions"
import Tasks from "../todo/Tasks";






// const Dashboard = ({uid,addTodo, signOutUser ,addSampleData}) => {
const Dashboard = ({uid,addTodo, signOutUser }) => {
    const navigate = useNavigate();
    useEffect(() => {
        if (!uid){
            navigate('/SignIn')
        }
        else{
       
          // addSampleData();
        }
   // },[addSampleData]) 
    },[]) 
  return (
    <>

    <NavBar signOutUser={signOutUser} />
    <TaskForm addTask={(todo) => addTodo( todo)}/>
<Tasks/>
        </>
  );

  
}
const mapStateToProps = (state) => ({
    uid: state.auth.uid,
  });

//  export default connect(mapStateToProps, { addTodo, signOutUser,addSampleData })(Dashboard);
  export default connect(mapStateToProps, { addTodo, signOutUser})(Dashboard);