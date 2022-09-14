import React from 'react'
// import restuarant1 from "./restuarant1.jpeg"
// import restuarant2 from "./restuarant"
// import restuarant3 from "./restuarant3.jpeg"


function Home() {
    
    return (
      <div className='bg-page'>
        <div className='intro'>
        <div className='p-home'>
          {/* <img src={restuarant2} alt="restuarant" className='restuarant' style={{width: "400px", height: "350px"}}/> */}
          <p>Welcome to Lamar restaurant. <br></br> Explore the authentic, diverse flavors of Peruvian gastronomy with views overlooking Miami's Biscayne Bay.. <br>Gaston Acurio features the acclaimed Peruvian cuisine</br>.</p>
        </div>
        <div>
          {/* <img src={restaurant} alt="restaurant1" className="restaurant1" style={{width: "750px", height: "600px", marginLeft: "3rem"}}/> */}
        </div>
        </div>
        <div>
          <h2 style={{color: "purple", marginTop: "3rem", marginLeft: "2.5rem"}}> Services</h2>
        </div>
        <div style={{display: "flex", marginLeft: "2.5rem", marginTop: "1rem"}}>
          <div className='service1'>
            <h4>Dine-in</h4>
            <p> Chic waterfront find offering Peruvian & fusion fare,<br></br>plus bars for cocktails, ceviche & anticucho.<br></br></p>
          </div>
          <div className='service2' style={{paddingLeft: "3rem"}}>
            <h4>Table Service</h4>
            <p>Table service is considered as a border category of service style<br>which consists of English Service, American Service, Pre plated Service,</br></p>
          </div>
          <div className='service3' style={{paddingLeft: "3rem"}}>
            <h4>Dinner</h4>
            <p>Dine at the Travellers Restaurant, our all-day dining world-cuisine restaurant. Choose from the a la carte menu</p>
          </div>
          </div>
          <div>
        </div>
          <div className='footer' style={{display: "flex"}}>
            <div style={{marginRight: "10rem", marginLeft: "4rem"}}>
            <h3>Quick Links</h3>
            <p>Home</p>
            <p>Reviews</p>
            <p>About us</p>
            </div>

          
            <p className='btm-footer' style={{textAlign:"center", fontWeight: "700"}}>Copyright@lamarrestaurant. All rights reserved.</p>
          </div>
    </div>
    )
  }

export default Home;

