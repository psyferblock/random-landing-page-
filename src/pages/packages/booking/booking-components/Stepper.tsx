import React ,{useState,useRef,useEffect} from 'react'

export const Stepper = ({steps,currentState }) => {

    const [newStep,setNewStep]=useState([])
    const stepRef=useRef()

    const updateStep=(stepNumber,steps)=>{
        //
    }

    useEffect(()=>{
        //create object
    const stepsState=steps.map((step,index)=>(
    Object.assign( // im creating an object to each element of the array  
        {},{
            description:step,
            completed:false,
            highlighted:index===0?true:false,
            selected:index===0?true:false,
        }
        )
        ))
    stepRef.current=stepsState
    const current=updateStep(currentStep-1,stepRef.current)
    setNewStep(current)
    },[steps,currentState])

    const displaySteps=newStep.map((step,index)=>{
        return (
            
            <div className="w-full flex items-center">
        <div className='relative flex flex-col items-center rext-teal-600'>
            <div className='rounded-full trasition duration-500 ease-in-out border-2 border-gray-300 h-12 w-12 flex items-center justify-center py-3'>
                {/* display number */}1
            </div>
            <div className='absolute top-0 mt-15 w-32 text-center text-xs font-medium uppercase'>
                {/* display step  */}display
            </div>
        </div>
        <div className='flex-auto border-t-2 transition duration-500 ease-in-out'>
    {/* display line  */}
        </div>
    </div>)
    }
    )

  return (
<>
<div className='mx-4 p-4 flex justify-between items-center  '>
    {displaySteps}
</div>
    
            </>
  )
}
