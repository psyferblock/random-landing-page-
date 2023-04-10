import PackageLocationCard from "./packageComponents/PackageLocationCard"

export default function PackageLayout(
    {children}
    :{children:React.ReactNode})
    {
return (
    <>
    <div className="  " >
        <div className="flex">
            <PackageLocationCard/> 
            <PackageLocationCard/>
        </div>
       
    <div   >
        {children}
    </div>

     </div>
     </>
)
}