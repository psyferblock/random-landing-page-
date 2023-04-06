import React from 'react'

function Hero() {
  return (
    <div className=" w-width  bg-cyan-50">

    <div className="  bg-cyan-500 md:flex relative  ">
      <img  className=" h-auto w-width object-fill md:max-w-screen-2xl -z-1" src='https://coworker.imgix.net/photos/lebanon/choueifat/hexa-lebanon/main.png?w=921&h=556&q=90&auto=format&fit=crop&mark=/template/img/wm_icon.png&markscale=5&markalign=center' 
      alt="hexa choueifat" 
      />
      <div className="box-border top-2 left-6 absolute sm:top-36 sm:left-10 md:top-48 md:left-16 z-10 w-1/2 h-48 max-w-24 bg-purple-400 bg-opacity-40 m-6 p-6 border-cyan-400 ">
        <h1>somthing here </h1>
        <h3> details about how awesome the company is  </h3>

      </div>
    </div>
    </div>
  )
}

export default Hero
