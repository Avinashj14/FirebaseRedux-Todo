//SignIn.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { connect } from 'react-redux';
import { signIn } from '../../actions/authActions';

const SignIn = ({signIn}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 const navigate=useNavigate();
  const handleSubmit = async(e) => {
    e.preventDefault();
  const success=  await signIn(email, password);
  console.log(success)
    if (success) {
      
      navigate('/dashboard');
    }
  };
  
  return (
    <>
<section className="bg-gray-50 min-h-screen flex items-center justify-center">

  <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
  
    <div className="md:w-1/2 px-8 md:px-16">
      <h2 className="font-bold text-2xl text-[#002D74]">Login</h2>
      <p className="text-xs mt-4 text-[#002D74]">If you are already a member, easily log in</p>

      <form action="" className="flex flex-col gap-4"onSubmit={handleSubmit}>
        <input className="p-2 mt-8 rounded-xl border" type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <div className="relative">
          <input className="p-2 rounded-xl border w-full" type="password" name="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
       
        </div>
        <button className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">Login</button>
      </form>

      <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
        <hr className="border-gray-400"/>
        <p className="text-center text-sm">OR</p>
        <hr className="border-gray-400"/>
      </div>

 
    
      <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
        <p>Don't have an account?</p>
        <Link to="/SignUp">
  <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">Register</button>
</Link>
      </div>
    </div>


    <div className="md:block hidden w-1/2">
      <img className="rounded-2xl" src="https://imgs.search.brave.com/LC_JWKbfGPUxQCEOxQ_27K8aaej7v_Eq2RsPuaDvtJ8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jbGlj/a3VwLmNvbS9ibG9n/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE5/LzAxL3RvLWRvLWxp/c3QtYXBwcy5wbmc"/>
    </div>
  </div>
</section>
    
    </>
  )
};
export default connect(null, { signIn })(SignIn);