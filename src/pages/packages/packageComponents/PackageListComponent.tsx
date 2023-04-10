export default function PackageListComponent(){

    const listItems=["one locker","free parking","free drinks","Limited Access To Meeting Rooms Per Availability","something else"]
    return (
        <>
        <ul className="grid my-1 ">
            {listItems.map((list)=>(
                <li className="  border-b-grey-600 border-2 h-10">{list}</li>
            ))}
                
            </ul>
            </>
    )
}