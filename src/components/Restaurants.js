import React, { useState, useEffect } from 'react'
function Restuarants() {
  const [restuarant, setRestuarants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/restuarant")
    .then((response) => response.json())
    .then((data) =>{
      setRestuarants(data)
      console.log(data)
    })
  },[]);
  return (
    <div className='cust-rev'>
      <h3>Restuarant</h3>
      <ul className="restuarants">
       
      {
            Restuarants.map((Restuarants) => ( 
            <ol key = { restuarant.id } >
              <div>
                 { restuarant.name }
                 </div>
                  <div>    
                 {restuarant.location}
                 </div>
  
                </ol>
            ))
        }
      </ul>
     
    </div>
  )
}

export default Restuarants;