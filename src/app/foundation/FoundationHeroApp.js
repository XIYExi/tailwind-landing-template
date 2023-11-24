import React, {useState} from "react";
import classnames from "classnames";

const images = [
    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2378&q=80',
    'https://images.unsplash.com/photo-1527030280862-64139fba04ca?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1506&q=80'
];

export default function FoundationHeroApp(){

    const [mobileMenu, setMobileMenu] = useState(false);

    const [current, setCurrent] = useState(0);

    const mobileMenuClass = classnames({
        'flex': mobileMenu,
        'hidden': !mobileMenu,
    }, 'lg:flex flex-col lg:flex-row items-center justify-center bg-black lg:bg-transparent pt-6 pb-8 lg:p-0 -mb-6 lg:m-0 rounded-t-3xl shadow-2xl lg:shadow-none font-bold uppercase italic lg:normal-case lg:font-normal not-italic')

    return(
        <React.Fragment>
            <div className='h-24 w-full absolute top-0 left-0 bg-black'></div>
            <div className='h-24 z-20 relative container mx-auto flex items-center justify-between px-6'>
                <a href='#' className='text-xl font-extrabold italic tracking-tighter text-white uppercase'>foundation</a>
                <div className='text-white text-lg fixed bottom-0 left-0 lg:relative p-6 lg:p-0 w-full lg:w-auto'>

                    <div className={mobileMenuClass}>
                        <a href='#' className='my-2 lg:ml-6'>Home</a>
                        <a href='#' className='my-2 lg:ml-6'>About</a>
                        <a href='#' className='my-2 lg:ml-6'>Blog</a>
                        <a href='#' className='my-2 lg:ml-6'>Contact</a>
                        <a href='#' className='ml-12 hidden lg:block'>
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </a>
                        <a href="#" className="ml-4 hidden lg:block">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </a>
                    </div>


                    <button
                        onClick={() => setMobileMenu(prevState => !prevState)}
                        className='lg:hidden bg-black text-white rounded-3xl w-full py-4 text-center uppercase text-sm shadow-2xl lg:shadow-none focus:outline-none'
                    >
                        {
                            mobileMenu ? (
                                <div className="flex items-center justify-center" style={{zIndex: 9999}}>
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Close
                                </div>
                            ) : (
                                <div className="flex items-center justify-center" style={{zIndex: 9999}}>
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                                    </svg>
                                    Menu
                                </div>
                            )
                        }
                    </button>
                </div>


            </div>

            {/*轮播背景图*/}
            <div className='-mt-32 relative w-full bg-black pt-64 pb-24'>
                <div className='relative z-10 text-center text-white mx-auto max-w-xl'>
                    <h1 className='text-3xl lg:text-7xl mb-4 font-bold uppercase italic'>building contractions</h1>
                    <a href='#' className='inline-block rounded-full border-2 border-white text-lg px-8 py-3 hover:bg-white hover:text-gray-900'>
                        Find out more
                    </a>
                </div>
                <img src={images[current]} className='w-full h-full absolute inset-0 object-cover opacity-75' alt='' loading='lazy' />
            </div>

        </React.Fragment>
    )
}