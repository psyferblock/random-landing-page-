import React from 'react'
import ContactUsButton from '../globlcomponents.tsx/ContactUsButton'

function GetInTouch() {
  return (
    <div className=" bg-emerald-900 mx-20  m-auto h-[220px] border-8 border-grey-600 flex flex-row space-x-4 justify-center items-center relative -top-36 ">
      <div  className="text-3xl text-white ">
      <h1>Get in touch with us </h1>
      </div>
      <div>
      <ContactUsButton/>

      </div>
    </div>
  )
}

export default GetInTouch