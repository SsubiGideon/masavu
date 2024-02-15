import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header () {
    const [backgroundIndex, setBackgroundIndex] = useState(0);
    
    const images = [
        '/images/img6.jpg',
        '/images/img1.png',
        '/images/img4.png'
    ];

    useEffect(() => {
         const intervalId = setInterval(() => 
         {setBackgroundIndex((backgroundIndex) => backgroundIndex === images.length - 1? 0: backgroundIndex  + 1)}, 5000);

    return () => clearInterval(intervalId);
    }, [images.length]
        );

    return(
        <div className="header" style={
            {backgroundImage:
         `url(${images[backgroundIndex]})`,
         backgroundSize: 'cover',
         backgroundPosition:'center'
         }}>
            <h1>MASSAVU INVESTMENT CLUB</h1>
            <p>Welcome to our Financial Journry</p>
            <Link to='becomemember' className="headerbtn">Become Member</Link>
        </div>
    );
}