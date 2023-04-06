export default function DropDownPackages(){
    return (
            <div
        className='from-teal-100 via-teal-300 to-teal-500 bg-gradient-to-br  flex justify-center items-center'>
        <div className='relative mx-4'>
            <button className="bg-sky-600 p-2 font-bold text-gray-100 rounded-md  focus:bg-sky-400 focus:text-gray-200 transition-all duration-200  peer">packages</button>
            <div className=' w-80 absolute top-5 z-10 after:content-[""] after:inline-block after:absolute after:top-0 after:bg-white/40
                after:w-full after:h-full after:-z-20 after:blur-[2px] after:rounded-lg
                peer-focus:top-12 peer-focus:opacity-100 peer-focus:visible 
                transition-all duration-300 invisible  opacity-0 
                '>
			<ul className='py-6 px-3 flex flex-col gap-3'>
				<li className='cursor-pointer bg-sky-300 p-3 rounded-md hover:opacity-90 text-white'>Eat an apple a day</li>
				<li className='cursor-pointer bg-blue-300 p-3 rounded-md hover:opacity-90 text-white'>Eat an apple a day
				</li>
				<li className='cursor-pointer bg-cyan-300 p-3 rounded-md hover:opacity-90 text-white'>Eat an apple a day
				</li>
				<li className='cursor-pointer bg-red-300 p-3 rounded-md hover:opacity-90 text-white'>Eat an apple a day</li>
				<li className='cursor-pointer bg-yellow-300 p-3 rounded-md hover:opacity-90 text-white'>Eat an apple a day
				</li>
			</ul>
		</div>
	</div>
</div>
    )
}