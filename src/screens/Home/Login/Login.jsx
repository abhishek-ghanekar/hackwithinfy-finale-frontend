import React, { useState } from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../../utils/firebase-config';
import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
import { ToastContainer, toast } from 'react-toastify';
import Footer from '../../../components/Footer';
  

const Login = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
// const auth = getAuth();
const navigate = useNavigate()
  const handleLogin = () => {
    signIn()
  }
  const signIn = () => {
    console.log("here")
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        navigate("/dashboard")
        // ...
    })
    .catch((error) => {
        // toast("invalid credentials")
        toast.error("invalid credentials")
        const errorCode = error.code;
        const errorMessage = error.message;
    });
  }
      

  return (
    <div className='h-screen'>
  {/* Hello world */}

  <Navbar/>
  <section className="text-gray-600 body-font  my-32">
    
    <div className="container px-5  mx-auto flex justify-center h-full items-center">
      <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col  w-full mt-10 md:mt-0 relative z-10 shadow-md">
        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
          Login To The Application
        </h2>
        {/* <p className="leading-relaxed mb-5 text-gray-600">
          Post-ironic portland shabby chic echo park, banjo fashion axe
        </p> */}
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">
            Password
          </label>
          <input
            type="text"
            id="email"
            name="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <p className="text-xs text-gray-500 mt-3 mb-3">
          Forgot Password?
        </p>
        {/* <div className="relative mb-4">
          <label htmlFor="message" className="leading-7 text-sm text-gray-600">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            defaultValue={""}
          />
        </div> */}
        <button className="text-white bg-[#383838] border-0 py-2 px-6 focus:outline-none   rounded text-lg" onClick={handleLogin}>
          Login
        </button>
        
       
      </div>
    </div>
  </section>
  <Footer/>
  <ToastContainer/>
</div>

  )
}

export default Login
