//SignUp.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { connect } from 'react-redux';
import { signUp } from "../../actions/authActions";
//import { collection, addDoc } from "firebase/firestore"; 
//import { firestore } from "../../firebase";
//import firebase from "../../firebase"; 

//import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";
//const auth = getAuth(firebase);

const SignUp = ({ signUp }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const  navigate=useNavigate();
  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(username,email,password)
    await signUp(email, password, username);

    navigate('/SignIn')

// try {
//   const docRef = await addDoc(collection(firestore, "users"), {
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
//   });
//   console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//   console.error("Error adding document: ", e);
// }
    // createUserWithEmailAndPassword (auth, email, password).then( value=>
    //   alert("Success"))}
  }
  
  return (
    <>
      <section className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
          <div className=" px-8 px-16">
            <h2 className="font-bold text-2xl text-[#002D74]">Sign Up</h2>
            <p className="text-xs mt-4 text-[#002D74]">
              Join us and create a new account
            </p>

            <form  className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input className="p-2 mt-8 rounded-xl border" type="text" name="username" placeholder="Username"  value={username} onChange={(e) => setUsername(e.target.value)}/>
              <input className="p-2 rounded-xl border" type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
              <div className="relative"> <input   className="p-2 rounded-xl border w-full"   type="password"   name="password"   placeholder="Password"  value={password} onChange={(e) => setPassword(e.target.value)} />
               
              </div>
              <button className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300"> Sign Up
              </button>
            </form>

            <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
              <p>Already have an account?</p>
            <Link to="/SignIn">
            <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300"> Login
              </button></Link>
            </div>
          </div>

       
        </div>
      </section>
    </>
  );
};

export default connect(null, { signUp })(SignUp); // Connect the component to Redux and make signUp available as a prop