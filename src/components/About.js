import React from 'react'
function About() {
  return (
    <div style={{marginBottom: "4rem"}}>
    <h2 style={{marginLeft: "8rem", color: "blue"}}>About us</h2>
    <div style={{display: "flex"}}>
      
      <div>
        <p style={{letterSpacing: "2px", lineHeight: "25px", marginLeft: "2rem"}}>
          lamar restuarant is located near the beach of miami.It offers free Wi-Fi and parking. This restuarant has lush garden and a 24-hour front desk.
        <p>Individually decorated, the accommodations have a private entrance and a terrace or balcony with garden views.</p>
         lamar has a bar-restaurant and packed lunches are available upon request. The hotel’s staff 
        </p>
      </div>
      <div>
        {/* <img src={About} style={{width: "450px", height: "510px", marginLeft: "7rem", borderRadius: "4px"}} alt='about' /> */}
      </div>
      <div>
      </div>
      </div>
    </div>
  )
}

export default About;