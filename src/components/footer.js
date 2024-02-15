import React from "react";

export default function Footer (){
    return(
        <div className="footer" style={{
            backgroundImage:'url(/images/Abstract-Website-Background.jpg)',
            backgroundPosition:'center',
            backgroundSize:'cover'
            }}>
            <h3>Contact Us</h3>
            <div id="Contact Us">
                <div className="contactus">
                    <div><img src="/images/email.png" alt="email"></img>
                    <a href="mailto:ssgideons@gmail.com">ssgideons@mail.com</a></div>
                    
                    <div><img src="/images/phone.png" alt=""></img>
                    <a href="tel:+256700848980">+256700848980</a></div>
                    <div><img src="/images/location.png" alt=""></img>
                    <p>Kampala, kanyanya, Gayaza Road</p></div>
                    
                </div>
                 
                 
            </div>
        </div>
    )
}