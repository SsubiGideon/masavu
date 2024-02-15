import React from 'react'
import { Link } from 'react-router-dom'
import { auth, provider } from '../components/config/firebase.ts'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'


function LogIn() {
const navigate = useNavigate();
  const signInWithGoogle =async () => {
    const result = await signInWithPopup(auth, provider);
     console.log(result)
    navigate('/becomemember')
  };

  return (
    <div className='login'>
      <h1>Welcome to massavu investment where you will get your financial freedom</h1>
      <h2>Log in with google to continue</h2>
      <button onClick={signInWithGoogle}> <img src='/images/googlelogo.png' width={40}/>LOG IN WITH GOOGLE</button>
      <p>Don't have an account? <Link to='/register'>Sign Up</Link> </p>
    </div>
  )
}

export default LogIn
