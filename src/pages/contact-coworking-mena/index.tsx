import ContactUsForm from "@/components/globlcomponents.tsx/ContactUsForm"


const ContactUsPage =()=>{
return (
    <>
    <div className=" border-8  border-yellow-600 w-full min-h-full bg-yellow-300 flex flex-col align-center ">
        <div className="h-[300px] w-full  bg-slate-400 inline-block text-center align-bottom  text-3xl"> Contact Us  </div>
        <ContactUsForm/>
        <div  className="h-[200px] "> </div>

    </div>
    </>
)
}

export default ContactUsPage