import Link from 'next/link'
import React from 'react'
import DropDownPackages from './globlcomponents.tsx/DropDownPackages'

function Navbar() {
  return (
    <div className="absolut">
      <div className="flex flex-row justify-between p-6 bg-slate-200 ">
        <div>
       <Link href="#home" aria-label="home Page"> 
       <div className='-z-10 bg-auto bg-center wm-30 hm-15'>

        <img className="  "src=" "
       alt="logo hexa" />
       </div>
        </Link>
        </div>
        <div>
        <ul  className="columns-3 flex flex-row basis-1/4 justify-between" >
          <li>
          <Link href="#packages" aria-label="home Page"> home </Link></li>
          <li>
            <DropDownPackages/></li>
          <li>
          <Link href="#contactUs" aria-label="home Page"> contact us  </Link></li>
          <li> 
         <Link href="#Signup/login" aria-label="home Page"> sign in  </Link></li>
        </ul>

      </div>
        </div>
    </div>
  )
}

export default Navbar
