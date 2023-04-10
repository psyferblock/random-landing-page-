import PackageLocationCard from "./packageComponents/PackageLocationCard";
import PackagesPage from "./packageComponents/PackagesPage";
import PackageLayout  from "./PackageLayout";
// the packagesPage is going to recieve the props of the 

export default function Packages(){
    return (
        <>
        <PackageLayout>

        <div className="min-h-screen min-w-screen block border-4 border-blue-400 ">
            <PackagesPage /> 
            
        </div>
        </PackageLayout>
        </>
    )
}