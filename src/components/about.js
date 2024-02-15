import React from "react";
import { Link } from "react-router-dom";

export default function AboutUs () {
    return(
        <div className="about-us" >
            <h2>About Massavu</h2>
            <div id="about-us">
                <div className="abouttxt">
                Massavu Investment Club is a collaborative financial initiative where members pool their resources to save money collectively. Throughout the year, members contribute predetermined amounts to a shared fund. At the end of the year, the accumulated funds are strategically invested in real estate properties as a group. This approach allows members to benefit from collective purchasing power, diversification, and potentially higher returns on their investments in the real estate market. By joining forces, individuals can access investment opportunities that might be otherwise out of reach and foster a culture of financial responsibility and cooperation within the group.

              < Link to='/about-us'><button>Learn More..</button></Link> 
                </div>
                <div className="aboutimg">
                    <img id="aboutimg" src="/images/img4.png" alt="aboutimg"></img>
                </div>
            </div>
            
        </div>
    );
}