import Link from "next/link";

export default function FooterDetails(){
    return (
        <>
        <div className="flex flex-row mx-10 p-4 justify-center border-8 border-black  bottom-500 space-x-48 space-x-3">
            <div className="flex flex-col justify-content align-center">
                <div className="flex flex-col">                 
                 HEXA Coworking | L1 | The Spot Mall |             
                <span>
                    Choueifat, Lebanon.
                </span>
                </div>           
                <span>
                    +961 78 824 982
                <Link href="whatsapp"/>
                </span>
                <div className="flex flex-col space-x-3" >                 
                    HEXA Coworking | L3 | ABC Verdun |                 
                    <span>
                        Beirut, Lebanon.
                    </span>
                    <span>
                        info@hexamena.com
                    </span>
                </div>
                <span>
                    +961 76 888 357
                    <Link href="whatsapp"/>
                </span>
            </div>
            <div className="flex flex-col">
              < Link href={"#home"}> home </Link>
                <Link href={"#choueifat-package"}> the spot packages </Link>
                <Link href={"#verdun-package"}> abc verdun packages  </Link>
                <Link href={"#contact"}> contact us </Link>
              
            </div>
            <div>
                socialmedia 
            </div>
        </div>

        </>
    )
}