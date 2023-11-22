

function BlogsNavApp(){

    return(
        <nav className='w-full bg-white md:pt-0 px-6 relative z-20 border-t border-b border-gray-light'>
            <div className="container mx-auto max-w-4xl md:flex justify-between items-center text-sm md:text-md md:justify-start">
                <div className="w-full md:w-1/2 text-center md:text-left py-4 flex flex-wrap justify-center items-stretch md:justify-start md:items-start">
                    <a href='#' className='px-2 md:pl-0 md:mr-3 md:pr-3 text-gray-500 no-underline md:border-r border-gray-light hover:text-black duration-300 transition-all'>Home</a>
                    <a href='#' className='px-2 md:pl-0 md:mr-3 md:pr-3 text-gray-500 no-underline md:border-r border-gray-light hover:text-black duration-300 transition-all'>Products</a>
                    <a href='#' className='px-2 md:pl-0 md:mr-3 md:pr-3 text-gray-500 no-underline md:border-r border-gray-light hover:text-black duration-300 transition-all'>About Us</a>
                    <a href='#' className='px-2 md:pl-0 md:mr-3 md:pr-3 text-gray-500 no-underline md:border-r border-gray-light hover:text-black duration-300 transition-all'>News</a>
                    <a href='#' className="px-2 md:pl-0 md:mr-3 md:pr-3 text-gray-500 no-underline hover:text-black duration-300 transition-all">Contact</a>
                </div>

                <div className="w-full md:w-1/2 text-center md:text-right text-gray-500 hover:text-black duration-300 transition-all md:mb-0 mb-4">
                    <a href='#'>Extra Links</a>
                </div>
            </div>
        </nav>
    )
}


export default BlogsNavApp;
