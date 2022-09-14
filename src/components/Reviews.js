import React,{useEffect,useState}from 'react'

const Reviews = () => {
  const[reviews, setReview] = useState([])
  
   useEffect(() => {
      fetch("http://localhost:9292/reviews")
      .then((response) => response.json())
      .then((data) =>{
        setReview(data)
        console.log(data)
      })
    },[]);
  const showReview = reviews.map((review) => (
    <ol key={review.id}>
      <p>comment:{review.body}</p>
    </ol>
))
  return (
    <div>{showReview}</div>
  )
}

export default Reviews
