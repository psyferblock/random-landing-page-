import Link from "next/link"

export default function CardComponent(props){
    return (
        <div>
            <div className="flex flex-col  content-center overflow-hidden  bg-white shadow-md rounded-lg w-full m-6 sm:w-52lg:gap-8 ">
                <div className=" content-center aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-1 lg:aspect-w-3 lg:aspect-h-4 "> 
                  <img className="h-1/2 w-1/2 p-10 object-fill"src="https://cdn-icons-png.flaticon.com/512/651/651188.png?w=740&t=st=1680547524~exp=1680548124~hmac=a474594f70644e6ef0a22e0e175ab2cbf8f8ce50c710d8c5598aec66aefa50d9" alt="packages"/>
                </div>
              <h2 className="text-center px-2 pb-5 pt-4"> {props.title}</h2>
              <h4>Whether you need a full-time office, a part-time desk, or a place to meet with your clients, we’ve got a 
                <span  className="text-green-500 mx-3 my-2 "> 
                <Link  href={props.href}>package</Link>
                </span> to meet your needs and budget.</h4>
              <div className=" bg-blue-500 text-white p-3 text-center shadow-md rounded-md hover:bg-blue-800 transition-all duration-500 active:bg-blue-300">
              <Link href={props.href} > send me to packages </Link>
            </div>
         </div>
        </div>
    )
}