
export default function SlateFooterApp(){
    return(
        <div className="bg-black text-gray-500 px-12 py-8 flex flex-wrap">
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-6 lg:mb-0">
                <a href='#' className='hover:text-white'>Home</a>
                <span className='px-4'>|</span>

                <a href='#' className='hover:text-white'>About</a>
                <span className='px-4'>|</span>

                <a href='#' className='hover:text-white'>Team</a>
                <span className='px-4'>|</span>

                <a href='#' className='hover:text-white'>Blog</a>
            </div>

            <div className='w-full lg:w-1/2 text-center lg:text-right'>
                &copy; copyright 2023
            </div>
        </div>
    )
}