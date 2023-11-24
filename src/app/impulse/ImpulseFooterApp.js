import React from "react";

function ImpulseFooterApp(){
    return(
        <div
            className="bg-gray-900 text-white text-opacity-40 font-semibold uppercase text-xs tracking-widest bg-opacity-80 px-12">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 py-24">
                <div>
                    <div className="text-white opacity-50 text-4xl font-display mb-12">Impulse</div>
                </div>
                <div className='md:ml-4'>
                    <div className="font-display text-white uppercase text-sm tracking-widest mb-6">More Info</div>
                    <a href="#" className="block mb-4">Shop</a>
                    <a href="#" className="block mb-4">About</a>
                    <a href="#" className="block mb-4">Info</a>
                    <a href="#" className="block mb-4">FAQ</a>
                </div>
                <div className='md:ml-4'>
                    <div className="font-display text-white uppercase text-sm tracking-widest mb-6">Helpful Links</div>
                    <a href="#" className="block mb-4">Shop</a>
                    <a href="#" className="block mb-4">About</a>
                    <a href="#" className="block mb-4">Info</a>
                    <a href="#" className="block mb-4">FAQ</a>
                </div>
                <div className='md:ml-4'>
                    <div className="font-display text-white uppercase text-sm tracking-widest mb-6">Find out more</div>
                    <a href="#" className="block mb-4">Shop</a>
                    <a href="#" className="block mb-4">About</a>
                    <a href="#" className="block mb-4">Info</a>
                    <a href="#" className="block mb-4">FAQ</a>
                </div>
            </div>
            <div
                className="text-sm lg:text-base text-center font-heading font-light tracking-widest uppercase text-white opacity-75 pb-24">
                ©2023 design by xiye. images by xiye
            </div>
        </div>
    )
}

export default ImpulseFooterApp;