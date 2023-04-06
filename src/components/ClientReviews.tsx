import React ,{useState} from 'react'
import StarRating from './StarRating'
import {BsChevronLeft,BsChevronRight, BsFileSlides} from "react-icons/bs"
import{RxDotFilled} from "react-icons/rx"


function ClientReviews() {
  const [rating,setRating]=useState(0)
  const [currentIndex,setCurrentIndex]=useState(0)

  const reviews=[
    {
        personalReview:"something ",
        customerName:"smurf",
        customerProfilePicture:"https://writestylesonline.com/wp-content/uploads/2016/08/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture.jpg",
        rating:3,
        professionalPosition:"big boss man doing strong things to feel powerful and change the world"
    },{
        personalReview:"nobody new ",
        customerName:"smurfette",
        customerProfilePicture:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.VzOnkxCRm3IVkbbU5s8OyQHaH8%26pid%3DApi&f=1&ipt=480940a602b9de0732a39920929418f1fb80721a8839c8181913a49565136dab&ipo=images",
        rating:3,
        professionalPosition:"wanabe gangster i guess "
    },{
        personalReview:"anything ",
        customerName:"sanfoor",
        customerProfilePicture:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.6PZd95dUeZbrmtGZO65pJgHaLH%26pid%3DApi&f=1&ipt=12cc604bea62ad9470c1048ab27a8c9a2f9674d46fd1a00ef1aab0d6ea07fd27&ipo=images",
        rating:3,
        professionalPosition:"smooth criminal dancing to the beat of mj and the olive garden"
    }
]

const prevReview = ()=>{
  let isFirstSlide=currentIndex===0
  const newIndex=isFirstSlide ? reviews.length -1: currentIndex -1
  setCurrentIndex(newIndex)
    
  
}
const nextReview=()=>{
   
  let isLastSlide=currentIndex===reviews.length-1
  const newIndex=isLastSlide ? 0: currentIndex +1
  setCurrentIndex(newIndex)
}

const carouselTimer=()=>
setTimeout(()=>{
  nextReview()
},5000)

const goToSlide=(slideIndex)=>{
  setCurrentIndex(slideIndex)
}
// carouselTimer()
  return (

    <>

  <div className="flex relative flex-col justify-center p-6 m-6 border-8 border-red-200 shadow group transition-4">
      <div className="mt-12 mb-6 flex justify-center">
        <img className="h-36 w-36 rounded-full shadow-lg dark:shadow-black/30" src={reviews[currentIndex].customerProfilePicture}/>
      </div>
      <h1 className="text-center"  >  {reviews[currentIndex].personalReview}</h1>
      <h2 className="text-center" >{reviews[currentIndex].customerName}</h2>
      {/* <div className="text-center" >{<StarRating rating={rating}/>}</div> */}
      <div className="text-center" >{reviews[currentIndex].professionalPosition} </div>

          {/* left arrow  */}
          <div className="hidden group-hover:block absolute top-[50%]  translate-x-4 translate-y-[-50%] left-5 text-2xl rounded-full p-2  hover:bg-black/20  border-black cursor-pointer ">
            <BsChevronLeft onClick={prevReview} size={30}/>
        </div>
            {/* right arrow  */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-4 translate-y-[-50%] right-5 text-2xl rounded-full p-2  hover:bg-black/20  border-black cursor-pointer ">
            <BsChevronRight onClick={nextReview} size={30}/>
        </div>
        <div className="flex justify-center items-center top-4 py-2">
          {/* <div> */}
            {reviews.map((review,reviewIndex)=>(
            <div 
            key={reviewIndex} 
            onClick={()=>goToSlide(reviewIndex) }
             className="text-2xl cursor-pointer  ">
                <RxDotFilled/>
            </div>
             ))}
          {/* </div> */}
        </div>
    </div>
        
    </>
  )
}


export default ClientReviews