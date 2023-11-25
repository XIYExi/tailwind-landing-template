
export default function ShoutHeaderApp(){
    return(
        <header className='bg-white'>
            <div className='p-8 container mx-auto flex flex-wrap items-center justify-between'>
                <a href='#' className='mb-6 md:mb-0 w-full text-center md:text-left md:w-auto font-display font-black text-3xl uppercase'>
                    Shout.
                </a>

                <ul className='justify-center md:justify-end flex-1 flex list-reset'>
                    <li>
                        <a href='#' className='text-sm text-gray-600 no-underline hover:text-black duration-300 transition-all'>About us</a>
                    </li>
                    <li className='ml-6'>
                        <a href='#' className='text-sm text-gray-600 no-underline hover:text-black duration-300 transition-all'>Products</a>
                    </li>
                    <li className='ml-6'>
                        <a href='#' className='text-sm bg-yellow-400 py-3 px-6 hover:border-yellow-400 text-gray-700 border-white border-2 hover:bg-white bg-opacity-90 hover:text-black duration-300 transition-all'>Contact</a>
                    </li>
                </ul>
            </div>
        </header>
    )
}