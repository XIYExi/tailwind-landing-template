import React from "react";
import {ReactComponent as VoyageIcon} from "./assets/VoyageIcon.svg";

const url = 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1993&q=80';

function VoyageContainerApp(){

    return (
        <React.Fragment>

            <div className='relative flex justify-center'>
                <div className='w-full h-1/2 bg-gray-100 absolute inset-0'></div>
                <img src={url} alt='' className='w-full h-96 object-cover relative max-w-6xl' />
            </div>

            <div className='py-24 text-center'>
                <h1 className='text-4xl text-green-800 font-display uppercase tracking-widest'>The Travel Blog</h1>
                <div className='w-full max-w-xs h-px bg-gray-300 my-6 mx-auto'></div>
                <h2 className='uppercase max-w-md mx-auto font-heading font-light tracking-widest text-gray-500'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
                </h2>
            </div>

            <div className='flex flex-wrap'>
                <img
                    src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                    alt=''
                    className='w-full lg:w-7/12 h-96 object-cover'
                />
                <div className='w-full lg:w-5/12 relative flex flex-col justify-end'>
                    <div className="flex justify-center">
                        <VoyageIcon />
                    </div>
                    <div className='bg-gray-100 px-12 pt-24'>
                        <p className='text-sm leading-loose text-gray-400 font-light'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <a href='#' className='mt-4 block bg-white w-full uppercase font-display text-gray-700 text-center text-sm tracking-widest p-3'>
                            Meet the team
                        </a>
                    </div>
                </div>
            </div>

            <div className='bg-gray-100 pt-24'>
                <div className='py-12 text-center'>
                    <h2 className='text-3xl font-display text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing</h2>
                </div>

                <div className='mb-12 container mx-auto flex'>
                    <div className='bg-green-600 bg-opacity-40 text-white text-center w-1/2 py-64'>
                        <h4 className="text-xs uppercase font-light tracking-widest mb-1">Featured Destination</h4>
                        <h3 className="font-display text-xl">The South of France</h3>
                    </div>
                    <div className='w-1/2 relative'>
                        <img
                            src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                            alt=''
                            className="absolute inset-0 w-full h-full object-cover" />
                    </div>
                </div>

                <div className='container mx-auto text-center py-12 grid grid-cols-1 md:grid-cols-3 gap-12'>
                    <a href="#" className="block hover:opacity-75 px-10 md:px-0">
                        <img alt=''
                            src="https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                            className="w-full h-64 object-cover"/>
                            <h3 className="font-display text-gray-600 py-6 tracking-wide">Commercial Work</h3>
                    </a>
                    <a href="#" className="block hover:opacity-75 px-10 md:px-0">
                        <img alt=''
                            src="https://images.unsplash.com/photo-1506125840744-167167210587?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80"
                            className="w-full h-64 object-cover"/>
                            <h3 className="font-display text-gray-600 py-6 tracking-wide">Travel Guides</h3>
                    </a>
                    <a href="#" className="block hover:opacity-75 px-10 md:px-0">
                        <img alt=''
                            src="https://images.unsplash.com/photo-1534777367038-9404f45b869a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                            className="w-full h-64 object-cover"/>
                            <h3 className="font-display text-gray-600 py-6 tracking-wide">Get in touch</h3>
                    </a>
                </div>
            </div>

            <div className='bg-green-600 bg-opacity-40 px-12 py-24 flex flex-col items-center justify-center'>
                <p className='tracking-widest text-lg text-white text-center uppercase font-heading font-light mb-6'>Chat with us today</p>
                <a href='#' className='inline-block uppercase text-xs tracking-widest text-center bg-white text-green-900 p-3 px-12 hover:opacity-75'>
                    Let's work together
                </a>
            </div>

        </React.Fragment>
    )
}

export default VoyageContainerApp;
