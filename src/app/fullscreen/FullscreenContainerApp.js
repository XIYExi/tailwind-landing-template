import React from "react";

function FullscreenContainerApp(){
    return(
        <div className='py-24 px-6'>
            <div className='max-w-6xl mx-auto mb-12'>

            </div>

            <div className='max-w-5xl mx-auto flex flex-wrap items-start'>
                <div className='w-full md:w-1/2 p-4 mb-12'>
                    <img src='https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800' className='block w-full h-auto mb-12' alt='' loading='lazy'/>
                    <a href='#' className='block text-2xl text-black text-center mb-6'>About Us</a>
                    <p className='mb-6 text-gray-600 text-center leading-relaxed text-sm'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                        ultricies nec, pellentesque eu, pretium quis, sem.
                    </p>
                    <a href='#' className='block text-black text-center'>Read more</a>
                </div>

                <div className="w-full md:w-1/2 p-4 mb-12">
                    <img src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=800" className="block w-full h-auto mb-12" alt='' loading='lazy'/>
                    <a href="#" className="block text-2xl text-black text-center mb-6">What's New?</a>
                    <p className="mb-6 text-gray-600 text-center leading-relaxed text-sm">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                        Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                        Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
                    <a href="#" className="block text-black text-center">Read more</a>
                </div>
            </div>
        </div>
    )
}


export default FullscreenContainerApp;