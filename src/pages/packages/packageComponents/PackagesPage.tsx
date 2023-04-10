import PackageCardComponent from "./PackageCardComponent"

export default function PackagesPage(){
    //this page recieves the name/id of the location
    //sends for the data from the database 
    // maps it into a card built on a different componet ( packageCardComponent)
    //table from the backend will have an array for the list items 
    const data=[{

    },
    {

    }
    ]
    return (
        <>
        <h1 className="text-2xl">ABC verdun package</h1>
        <h3 className="text-l">Electricity 24/7 | High Speed Internet</h3>
        <div className="flex flex-row justify-evenly  justify-content align-center m-10">
            {data.map(()=>(
                <PackageCardComponent/>
            ))}
          
        </div>
        </>
    )
}