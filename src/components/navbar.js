import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./config/firebase.ts";
import {useAuthState} from 'react-firebase-hooks/auth'
 

export default function Navbar (){
    const [shownav, setShownav] = useState(false);
    const [user] = useAuthState(auth)
     
    const toggleNavBar = () => {
        setShownav(!shownav)
    }

    const logout =async () => {
        await signOut(auth)
    }
    return(
        <div className="navbar">
            <img className='logo 'src="" alt="logo"></img>
            <ul id={shownav? 'open' : 'close'}>
               <Link to='/'> <a  ><li>Home</li></a></Link>
               <Link to='/about-us'><a href="about us"><li>About us</li></a></Link>         
                <Link to='/membership'><a href="membership"><li>Membership</li></a></Link> 
                <Link to='/contact-us'><a href="contact us"><li>Conctat Us</li></a></Link>        
                       
            </ul>
            <Link  to='/register'  className="join-us"> Join Us</Link> 

            {!user? <Link to='/log in' className="log-in">Log In</Link>:
            <Link to='/log in' className="log-in" onClick={logout}>Log Out</Link>}
            {user && <img src={user?.photoURL} width={40}/>}
            <div> {user?.displayName.split(' ')[1]}</div>

            <button onClick={toggleNavBar}>=</button>
        </div>
    )
}