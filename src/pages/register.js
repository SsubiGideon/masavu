import React from "react";
import { Link } from "react-router-dom";
import { auth, provider } from '../components/config/firebase.ts'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'



export default function Register (){
    const navigate = useNavigate();
   const signInWithGoogle =async () => {
    const result = await signInWithPopup(auth, provider);
     console.log(result)
    navigate('/becomemember')
  };
    return(
        <div className="register" style={{
            backgroundImage: 'url(/images/img9.jpg)',
            backgroundSize: 'cover',
            backgroundPosition:'top'
            }}>
            <h1>Welcome to massavu investment where you will get your financial freedom</h1>
            <h2>Sign Up with google to continue</h2>
            <button onClick={signInWithGoogle}> <img src='/images/googlelogo.png' width={40}/>SIGN UP WITH GOOGLE</button>
            <p>Already have an account? <Link to='/log in'>Log In</Link> </p>
             
                 
        </div>
    );
}