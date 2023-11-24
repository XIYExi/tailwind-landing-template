import React from "react";

export default function ImpulseHeroApp(){
    return(
        <React.Fragment>
            <div className='h-24 z-10 relative container mx-auto px-6 grid grid-cols-3'>
                <div className='flex items-center'>
                    {/*menu button*/}
                    <button>
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                <div className="flex items-center justify-center">
                    <a href="#">
                        {/*logo*/}
                        <svg className="h-24 w-auto text-white fill-current" viewBox='0 0 177.778 100'>
                            <path d='M31.941,62.825h25.65V37.175H31.941ZM52.654,47.532h-5.42v-5.42h5.42Zm-15.777-5.42H42.3V52.468H52.654v5.42H36.877Zm37.417-4.937A12.825,12.825,0,1,0,87.119,50,12.84,12.84,0,0,0,74.294,37.175Zm0,20.713A7.888,7.888,0,1,1,82.182,50,7.9,7.9,0,0,1,74.294,57.888Zm58.719-20.713A12.825,12.825,0,1,0,145.837,50,12.84,12.84,0,0,0,133.013,37.175Zm0,20.713A7.888,7.888,0,1,1,140.9,50,7.9,7.9,0,0,1,133.013,57.888Zm-29.36-20.713A12.825,12.825,0,1,0,116.478,50,12.84,12.84,0,0,0,103.653,37.175Zm0,20.713a7.888,7.888,0,1,1,7.488-10.356h-7.488v4.936h7.488A7.9,7.9,0,0,1,103.653,57.888Z'/>
                        </svg>
                    </a>
                </div>

                <div className="flex items-center justify-end">
                    {/*add to cart button*/}
                    <button>
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                        </svg>
                    </button>
                </div>
            </div>

            <div className='-mt-24 relative w-full py-12 px-12 bg-yellow-900'>
                {/* hero section */}
                <div className='relative z-10 text-center py-48'>
                    <h1 className='text-white text-center text-6xl font-display font-bold mb-12'>
                        A rider for every lifestyle
                    </h1>
                    <a href='#' className='inline-block bg-yellow-800 text-white uppercase text-sm tracking-widest font-heading px-8 py-4'>
                        Shop now
                    </a>
                </div>

                {/*hero links*/}
                <div className='relative z-10 mx-auto max-w-4xl flex justify-between uppercase text-white font-heading tracking-widest text-sm'>
                    <a href='#' className='border-b border-white'>Find out more</a>
                    <a href='#' className='border-b border-white'>Get in torch</a>
                </div>

                {/*banner image*/}
                <img
                    src="https://images.unsplash.com/photo-1490129375591-2658b3e2ee50?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2244&q=80"
                    className="w-full h-full absolute inset-0 object-cover opacity-70"
                    alt=''
                    loading='lazy'
                />
            </div>
        </React.Fragment>
    )
}