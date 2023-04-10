import Image from "next/image"
import Link from "next/link"

const PackageLocationCard=()=>{
    //.the package location card is foing to get hte information from the backend regarding the cards to be posted in the body of the location 
    //eg verdun will have 4 packages wach will have its own card 

    return (
        <div>
            <Link href="#choueifat">
            <div className="border-4 w-96 h-36 basis-2/6 flex  items-center justify-center space-y-0.5  border-green-600 m-4 ">

                <div className="flex flex-col " >

                    {/* <Image alt="location space" 
                     fill
                    src="https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=600"               
                    /> */}
                    <h3 className="text-center">title</h3>
                    <h1>The Spot Choueifat</h1>
                    <h3 className="text-center">packages</h3>
                </div>

            </div>

            </Link>


        </div>
    )

}
export default PackageLocationCard