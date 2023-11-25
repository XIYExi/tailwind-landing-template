import React from "react";

export default function SlateHeroApp(){
    return(
        <React.Fragment>
            <header className='bg-white p-8 flex justify-between items-center'>
                <a href='#' className='font-bold text-xl tracking-wider'>
                    slate.
                </a>

                <ul className='hidden md:flex uppercase text-sm'>
                    <li>
                        <a href='#' className='text-gray-600 hover:text-black duration-300 transition-all'>Home</a>
                    </li>
                    <li className='ml-8'>
                        <a href='#' className='text-gray-600 hover:text-black duration-300 transition-all'>About</a>
                    </li>
                    <li className='ml-8'>
                        <a href='#' className='text-gray-600 hover:text-black duration-300 transition-all'>Blog</a>
                    </li>
                    <li className='ml-8'>
                        <a href='#' className='text-gray-600 hover:text-black duration-300 transition-all'>Contact</a>
                    </li>
                </ul>
            </header>

            <div className='w-full h-screen relative flex items-center'>
                <img src="https://images.unsplash.com/photo-1497442995392-ee2f25825e2a?w=1800"
                     className="absolute top-0 left-0 w-full h-full object-cover"
                     alt=''
                     loading='lazy'
                />

                <div className='relative z-10 px-24 text-center'>

                    <h2 className="mb-2 text-white uppercase text-2xl md:text-5xl leading-tight tracking-wide font-normal">Shopping
                        Basket</h2>
                    <p className="text-white mb-6">Fresh organic food delivery</p>
                    <a href="#" className="inline-block uppercase bg-white py-3 px-6 text-xs">Learn more</a>

                </div>

            </div>
        </React.Fragment>
    )
}