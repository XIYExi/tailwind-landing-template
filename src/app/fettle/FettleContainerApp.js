import React, {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";

const images = [
    'https://images.unsplash.com/photo-1599058917677-0adfe92e05f2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1949&q=80',
    'https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80',
    'https://images.unsplash.com/photo-1599058917727-824293170100?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80',
]


const slideVariants = {
    hiddenRight: {
        x: "100%",
        opacity: 0,
    },
    hiddenLeft: {
        x: "-100%",
        opacity: 0,
    },
    visible: {
        x: "0",
        opacity: 1,
        transition: {
            duration: 0.5,
        },
    },
    exit: {
        opacity: 0.6,
        transition: {
            duration: 0.5,
        },
    },
};


function FettleContainerApp(){


    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState('left');

    const handleNext = () => {
        setDirection("right");
        setCurrent((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrevious = () => {
        setDirection('left');
        setCurrent(prevState =>
            prevState === 0 ? images.length - 1 : prevState - 1
        );
    }


    return(
        <React.Fragment>

            <div className='w-full h-screen relative z-20 -mt-32 px-12 flex items-center justify-center bg-green-900'>
                {/*绿色背景色*/}
                <div className='h-full w-full absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-20'></div>

                <div className='relative z-10 text-center px-12'>
                    <h1 className='md:max-w-lg lg:max-w-lg xl:max-w-2xl mx-auto text-3xl lg:text-4xl xl:text-5xl font-black leading-relaxed xl:leading-normal text-white font-display'>
                        Lorem ipsum dolor sit
                    </h1>
                    <div className='max-w-xs md:max-w-sm lg:max-w-md mx-auto mt-8 text-white text-sm lg:text-base lg:leading-loose tracking-widest'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                {/*背景轮播图*/}
                <AnimatePresence>
                    <motion.img
                        key={current}
                        variants={slideVariants}
                        initial={direction === 'right' ? 'hiddenRight' : 'hiddenLeft'}
                        animate='visible'
                        exit='exit'
                        src={images[current]}
                        className='absolute top-0 left-0 w-full h-full object-cover opacity-90'
                        loading='lazy'
                        alt=''
                    />
                </AnimatePresence>

                <div className='absolute z-20 top-1/2 left-0 w-full flex items-center justify-between px-6 md:px-12'>

                    {/*左右箭头*/}
                    <button onClick={handlePrevious} className='hover:opacity-50 duration-300 transition-all'>
                        <svg className="w-12 h-12 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M7 16l-4-4m0 0l4-4m-4 4h18"/>
                        </svg>
                    </button>

                    <button onClick={handleNext} className="hover:opacity-50">
                        <svg className="w-12 h-12 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                        </svg>
                    </button>
                </div>
            </div>

            <div className='p-12 md:p-24'>
                <div className='bg-gray-100 p-12 md:py-24 lg:flex'>
                    <div className='mx-auto max-w-4xl flex flex-wrap'>
                        <img src="https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                             className="w-full lg:w-4/12 h-full object-cover"
                             alt=''
                             loading='lazy'
                        />
                        <div className="flex-1 flex items-center justify-center pt-12 lg:pt-0">
                            <div className='text-center'>
                                <h3 className='text-4xl font-display mb-8 text-gray-700'>Lorem ipsum dolor sit</h3>
                                <p className='text-sm lg:text-lg max-w-md mx-auto text-gray-500 leading-relaxed'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='p-12 md:p-24 md:pt-12'>
                <h3 className='text-xs uppercase tracking-widest text-center mb-2 text-gray-800'>Featured Links</h3>
                <h2 className='text-2xl uppercase tracking-widest text-center lg:text-4xl font-heading mb-20 text-gray-900'>Work Overview</h2>
                <div className='lg:grid grid-cols-4 grid-rows-3 gap-5 font-display text-3xl text-white'>
                    <a href="#" className="bg-black col-span-1 row-span-1 relative flex items-center justify-center py-24">
                        <span className="relative z-10">About</span>
                        <img
                            src="https://images.unsplash.com/photo-1465310477141-6fb93167a273?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                            className="absolute inset-0 w-full h-full object-cover opacity-50 hover:opacity-25"
                            alt=''
                            loading='lazy'
                        />
                    </a>
                    <a href="#" className="bg-black col-span-1 row-span-1 relative flex items-center justify-center py-24">
                        <span className="relative z-10">Blog</span>
                        <img
                            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                            className="absolute inset-0 w-full h-full object-cover opacity-50 hover:opacity-25"
                            alt=''
                            loading='lazy'
                        />
                    </a>
                    <a href="#" className="bg-black col-span-2 row-span-2 relative flex items-center justify-center py-24">
                        <span className="relative z-10">Work</span>
                        <img
                            src="https://images.unsplash.com/photo-1594381898411-846e7d193883?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                            className="absolute inset-0 w-full h-full object-cover opacity-50 hover:opacity-25"
                            loading='lazy'
                            alt=''
                        />
                    </a>
                    <a href="#" className="bg-black col-span-2 row-span-2 relative flex items-center justify-center py-24">
                        <span className="relative z-10">Contact</span>
                        <img
                            src="https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                            className="absolute inset-0 w-full h-full object-cover opacity-50 hover:opacity-25"
                            alt=''
                            loading='lazy'
                        />
                    </a>
                    <a href="#" className="bg-black col-span-1 row-span-1 relative flex items-center justify-center py-24">
                        <span className="relative z-10">Prints</span>
                        <img
                            src="https://images.unsplash.com/photo-1485727749690-d091e8284ef3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
                            className="absolute inset-0 w-full h-full object-cover opacity-50 hover:opacity-25"
                            alt=''
                            loading='lazy'
                        />
                    </a>
                    <a href="#" className="bg-black col-span-1 row-span-1 relative flex items-center justify-center py-24">
                        <span className="relative z-10">FAQ</span>
                        <img
                            src="https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                            className="absolute inset-0 w-full h-full object-cover opacity-50 hover:opacity-25"
                            alt=''
                            loading='lazy'
                        />
                    </a>
                </div>
            </div>

            <div className="p-12 md:p-24 pt-0 md:pt-0">
                <div className="bg-gray-100 p-12 md:py-24 lg:flex">
                    <div className="mx-auto max-w-4xl flex flex-wrap">
                        <img
                            src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                            className="w-full lg:w-7/12 h-full object-cover"
                            alt=''
                            loading='lazy'
                        />
                        <div className="flex-1 flex items-center justify-center lg:px-12 pt-12 lg:pt-0">
                            <div className="text-center">
                                <div className="uppercase tracking-widest text-xs text-gray-600 mb-4 font-display font-bold mb-10">
                                    my latest adventure
                                </div>
                                <div className="uppercase tracking-widest text-xs text-gray-600 mb-4">Travel</div>
                                <h3 className="text-4xl leading-tight font-display mb-8 text-gray-700 my-6">Lorem ipsum dolor sit</h3>
                                <a href="#"
                                   className="inline-block uppercase text-xs tracking-widest border border-gray-300 px-6 py-4 hover:bg-gray-300">
                                    See more
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default FettleContainerApp;