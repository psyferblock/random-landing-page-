import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import CardComponent from './CardComponent'

function PackagesAmenetiesPrograms() {
  return (

  <div className="w-full min-h-screen bg-blue-100">
    <h1 className="font=bold text-xl text-center md:text-3xl md:mt-12 mb-4 "> check out some of our <span className="text-red-500">  
      stuff
      </span>
       </h1>
       <div className="flex-flex-wrap justify-center md:flex md:w-full p-10 m-5 space-x-4">
        <CardComponent title={"packages"} href={"#packages"}/>
        <CardComponent  title={"love"} href={"#love"}/>
        <CardComponent  title={"hero"} href={"#hero"}/>
        <CardComponent  title={"time"} href={"#time"}/>
        
        
       </div>

  </div> 
   )
}

export default PackagesAmenetiesPrograms