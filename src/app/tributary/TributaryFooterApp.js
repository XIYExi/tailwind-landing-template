import React from "react";


function TributaryFooterApp(){
    return(
        <React.Fragment>

            <div className='bg-green-50 text-gray-800 text-opacity-40 font-semibold text-xs tracking-widest px-12'>
                <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 py-24'>
                    <div>
                        <div className='text-gray-900 text-4xl font-display mb-12'>tributary</div>
                    </div>

                    <div className='md:ml-4'>
                        <div className='font-display text-gray-900 text-sm tracking-widest mb-6'>More Info</div>
                        <a href='#' className='block mb-4'>Shop</a>
                        <a href='#' className='block mb-4'>About</a>
                        <a href='#' className='block mb-4'>Info</a>
                        <a href='#' className='block mb-4'>FAQ</a>
                    </div>

                    <div className='md:ml-4'>
                        <div className='font-display text-gray-900 text-sm tracking-widest mb-6'>Helpful Links</div>
                        <a href='#' className='block mb-4'>Shop</a>
                        <a href='#' className='block mb-4'>About</a>
                        <a href='#' className='block mb-4'>Info</a>
                        <a href='#' className='block mb-4'>FAQ</a>
                    </div>

                    <div className='md:ml-4'>
                        <div className='font-display text-gray-900 text-sm tracking-widest mb-6'>Find out more</div>
                        <a href='#' className='block mb-4'>Shop</a>
                        <a href='#' className='block mb-4'>About</a>
                        <a href='#' className='block mb-4'>Info</a>
                        <a href='#' className='block mb-4'>FAQ</a>
                    </div>
                </div>
            </div>

            <div className='bg-green-600 bg-opacity-30 text-green-900 text-sm lg:text-base text-center font-heading font-light tracking-widest uppercase p-12'>
                ©2021 design by xiye. images by xiye
            </div>
        </React.Fragment>
    )
}

export default TributaryFooterApp;
