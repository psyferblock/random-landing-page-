import PackageListComponent from "./PackageListComponent"

export default function PackageCardComponent(){

    return (
        <div>
            <div className=" w-96 border-2 border-slate-400 text-center ">

                <div className="bg-orange-400 h-10 text-center ">Dedicated desk "package_title"</div>
                <div className="bg-orange-200 h-10 text-center">120$/month " package_price"</div>
                <PackageListComponent/>
                <button> submit your request</button>
                <div className="text-l h-10 text-center"><span>&#9200;</span>  Monday to Friday from 8:30 am till 7:30 pm</div>
            </div>

        </div>
    )
}