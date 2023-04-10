import { StepperLayout } from "./StepperLayout";
import { Stepper } from "./booking-components/Stepper";
import StepperController from "./booking-components/stepperController";
import { FormPackageInfo } from "./booking-components/steps/FormPackageInfo";
import { FormPersonalData } from "./booking-components/steps/FormPersonalData";
import { FormProfessionalInfo } from "./booking-components/steps/FormProfessionalInfo";
import { useState } from "react";

export default function BookingPage(){
    
    const [currentState,setCurrentState]=useState(1)
    const steps=['step1','step2','step3']
    const displayStep=(step: any)=>{
        switch(step){
            case 1:
                return <FormPersonalData/>
            case 2:
                return <FormProfessionalInfo/>
            case 3:
                return <FormPackageInfo/>    
            default:
            
        }
    }
    return (
        <>
        <div className="flex flex-col items-center" >

  <Stepper
  steps={steps}
  currentState={currentState}
  />
    

        <div className="h-96"> 

        something here 
        </div>
    <StepperController/>
       
        </div>
        </>
    )
}