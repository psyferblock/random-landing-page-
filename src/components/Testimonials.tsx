import ClientReviews from "./ClientReviews";
import {useState} from "react"

export default function Testimonials(){

const reviews=[
    {
        personalReview:"something ",
        customerName:"smurf",
        customerProfilePicture:"https://writestylesonline.com/wp-content/uploads/2016/08/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture.jpg",
        rating:3,
        professionalPosition:"big boss man doing strong things to feel powerful and change the world"
    },{
        personalReview:"something ",
        customerName:"smurf",
        customerProfilePicture:"https://writestylesonline.com/wp-content/uploads/2016/08/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture.jpg",
        rating:3,
        professionalPosition:"big boss man doing strong things to feel powerful and change the world"
    },{
        personalReview:"something ",
        customerName:"smurf",
        customerProfilePicture:"https://writestylesonline.com/wp-content/uploads/2016/08/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture.jpg",
        rating:3,
        professionalPosition:"big boss man doing strong things to feel powerful and change the world"
    },{

    }
]
    return (
        <>
        <div className="max-w-[1400px] max-h-[740px] w-full mb-36 py-16 px-4 relative border-blue-300 border-8 ">
       <ClientReviews        />
         

        </div>
        </>
    )
}