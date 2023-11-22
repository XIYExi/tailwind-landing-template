import Logo from './assets/loleLogo.png';

function BlogsHeaderApp(){


    return (
        <header className='w-full px-6 bg-white'>
            <div className='container mx-auto max-w-4xl md:flex justify-between items-center'>
                <a href='#' className='block py-6 w-full text-center md:text-left md:w-auto text-gray-dark no-underline flex justify-center items-center'>
                    {/*Your Logo*/}
                    <img className='w-8 h-6 mr-4' src={Logo} alt=''/>
                    <span className='font-bold'>Logo</span>
                </a>

                <div className='w-full md:w-auto text-center md:text-right flex items-center justify-center'>
                    {/*Login / Register*/}

                    <button className='items-center block px-6 py-2 text-xs font-bold rounded-full no-underline hover:shadow bg-gray-300 text-gray-600 duration-300 transition hover:bg-gray-200'>Login</button>
                </div>
            </div>
        </header>
    )
}

export default BlogsHeaderApp;
