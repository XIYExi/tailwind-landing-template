import React from "react";

function FullscreenHeroApp(){
    return(
        <div className='w-full h-screen relative text-white'>
            <img src='https://images.unsplash.com/photo-1438109491414-7198515b166b?w=1800' className='absolute top-0 left-0 w-full h-full object-cover' alt='' loading='lazy'/>
            <header className='z-10 relative mx-auto max-w-6xl px-6 py-8 flex justify-between items-center'>
                <a href='#' className='text-xl tracking-widest'>fullscreen</a>
                <ul className='hidden md:flex uppercase text-sm text-gray-500'>
                    <li>
                        <a href='#' className='text-white'>Home</a>
                    </li>
                    <li  className='ml-6'>
                        <a href='#'>About</a>
                    </li>
                    <li className="ml-6">
                        <a href="#">Blog</a>
                    </li>
                    <li className="ml-6">
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </header>
            <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center text-center px-12'>
                <div>
                    <h1 className='text-3xl md:text-6xl leading-tight mb-16'>
                        Duis aute irure dolor, <br className="hidden md:block" />reprehenderit in voluptate.
                    </h1>
                    <a href='#' className='border border-white py-4 px-8 hover:bg-white hover:text-black'>Get started</a>
                </div>
            </div>
        </div>
    )
}


export default FullscreenHeroApp;