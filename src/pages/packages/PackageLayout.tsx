import PackageLocationCard from "./packageComponents/PackageLocationCard"

export default function PackageLayout(
    {children}
    :{children:React.ReactNode})
    {
return (
    <>
    <div className="" >
    <PackageLocationCard/>
    <div   >
        {children}
    </div>

     </div>
     </>
)
}