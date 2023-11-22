


export default function BlocksHeaderApp(){


    return(
        <header className='mx-auto max-w-xl py-20 text-center'>
            <a href='#' className='block text-2xl mb-12'>Company Name</a>

            <ul className='flex justify-center uppercase text-xs'>
                <li><a href='#' className='mx-4 hover:text-gray-400 duration-300 transition'>Home</a></li>
                <li><a href='#' className='mx-4 hover:text-gray-400 duration-300 transition'>About</a></li>
                <li><a href='#' className='mx-4 hover:text-gray-400 duration-300 transition'>Blog</a></li>
                <li><a href='#' className='mx-4 hover:text-gray-400 duration-300 transition'>Contact</a></li>
            </ul>
        </header>
    )
}
