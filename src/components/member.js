import React from "react";
import { Link } from "react-router-dom";


export default function Member() {
    return(
        <div className="member" style={{
            backgroundImage: 'url(/images/img8.png)',
            backgroundSize: 'cover',
            backgroundPosition: ' center'
            }}>
                <div id="member">
                <h2>How to get membership</h2>
                <p>Membership to Massavu Investment Club offers individuals the opportunity to pool their resources and save collectively towards real estate investments. To join, members contribute an initial fee of 20,000UGX followed by monthly payments of 100,000UGX. At the end of the year, the accumulated funds are invested in real estate ventures. Should a member join midway through the year or after the year has elapsed, they are required to pay the previous monthly contributions before resuming regular payments. This model fosters financial discipline, collective wealth accumulation, and the prospect of lucrative real estate investments for all participants.
                </p>
                <Link to='/membership'><button>MEMBER BENEFITS</button></Link>
                </div>
                <div className="emptymember" ></div>
        </div>
    )
}