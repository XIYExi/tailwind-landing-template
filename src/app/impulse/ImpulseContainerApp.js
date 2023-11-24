import React from "react";

function ImpulseContainerApp(){
    return(
        <React.Fragment>
            <div className='grid grid-cols-2'>
                <div className='bg-white p-24 flex justify-end items-center'>
                    {/*featured image*/}
                    <img
                        src="https://images.unsplash.com/photo-1501631259223-89d4e246ed23?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1960&q=80"
                        className="max-w-md"
                        alt=''
                        loading='lazy'
                    />
                </div>


                {/*featured title & excerpt*/}
                <div className="bg-gray-100 p-24 flex justify-start items-center">
                    <div className='max-w-md'>
                        <div className='w-24 h-2 bg-yellow-800 mb-4'></div>
                        <h2 className='font-display font-bold text-4xl mb-6'>Speed: A jogging stroller that keeps up with you</h2>
                        <p className='font-light text-gray-600 mb-6 leading-relaxed'>
                            The all new Speed model is designed with the active life in mind.
                            Speed moves smoothly thanks to an all-wheel suspension, air-filled tires, and folds with ease due to a new ergonomic trigger release.
                        </p>
                        <a href='#' className='inline-block border-2 border-yellow-800 font-light text-yellow-800 text-sm uppercase tracking-widest py-3 px-8 hover:bg-yellow-800 hover:text-white duration-300 transition-all'>
                            View Model
                        </a>
                    </div>
                </div>
            </div>

            <img
                src="https://images.unsplash.com/photo-1501901609772-df0848060b33?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                className="w-full h-screen object-cover"
                alt=''
                loading='lazy'
            />

            <div className='max-w-xl mx-auto text-center py-32'>
                <div className='w-24 h-2 bg-yellow-800 mb-4 mx-auto'></div>
                <h2 className='font-display font-bold text-5xl mb-6'>Stork means versatility</h2>
                <p className='font-light text-gray-600 mb-6 leading-relaxed'>
                    Our strollers are guaranteed to perform wherever your adventure takes you next.
                </p>
            </div>


            <div className="grid grid-cols-3 bg-black">
                <a href="#" className="bg-black relative block flex items-center justify-center h-72 font-heading text-white uppercase tracking-widest hover:opacity-75">
                    <div className="relative z-10">Forest Trails</div>
                    <img
                        src="https://images.unsplash.com/photo-1449495169669-7b118f960251?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80"
                        className="absolute inset-0 w-full h-full object-cover opacity-50"
                        alt=''
                        loading='lazy'
                    />
                </a>
                <a href="#" className="bg-black relative block flex items-center justify-center h-72 font-heading text-white uppercase tracking-widest hover:opacity-75">
                    <div className="relative z-10">City Streets</div>
                    <img
                        src="https://images.unsplash.com/uploads/1411070807173e4d6762d/f84a3a01?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                        className="absolute inset-0 w-full h-full object-cover opacity-50"
                        alt=''
                        loading='lazy'
                    />
                </a>
                <a href="#" className="bg-black relative block flex items-center justify-center h-72 font-heading text-white uppercase tracking-widest hover:opacity-75">
                    <div className="relative z-10">Sandy Beaches</div>
                    <img
                        src="https://images.unsplash.com/photo-1528855275993-0f4a23fedd62?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                        className="absolute inset-0 w-full h-full object-cover opacity-50"
                        alt=''
                        loading='lazy'
                    />
                </a>
            </div>

            <div className='grid grid-cols-2'>
                <div className="bg-gray-100 p-24 flex justify-start items-center">
                    <div className="max-w-md">
                        <div className="w-24 h-2 bg-yellow-800 mb-4"></div>
                        <h2 className="font-display font-bold text-4xl mb-6">Our sustainability promise</h2>
                        <p className="font-light text-gray-600 mb-6 leading-relaxed">
                            At Stork we know you care deeply about the earth that our children will inherit.
                            That’s why we only use materials that are manufactured with sustainability in mind.
                        </p>
                        <a href="#" className="inline-block border-2 border-yellow-800 font-light text-yellow-800 text-sm uppercase tracking-widest py-3 px-8 hover:bg-yellow-800 hover:text-white">
                            Learn more
                        </a>
                    </div>
                </div>
                <div className="bg-white p-24 flex justify-end items-center">
                    <img
                        src="https://images.unsplash.com/photo-1521145239174-279dc2227166?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                        className="max-w-md"
                        alt=''
                        loading='lazy'
                    />
                </div>
            </div>


            <div className='relative w-full py-12 px-12'>
                <div className="relative z-10 text-center py-24">
                    <h1 className="text-white text-center text-6xl font-display font-bold mb-6">Endlessly customizable</h1>
                    <p className="text-white mb-10 font-bold text-lg">
                        Discover useful accessories for your Stork stroller that fit your unique needs.
                    </p>
                    <a href="#" className="inline-block bg-yellow-800 text-white uppercase text-sm tracking-widest font-heading px-8 py-4">View accessories</a>
                </div>

                <img
                    src="https://images.unsplash.com/photo-1503516459261-40c66117780a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80"
                    className="w-full h-full absolute inset-0 object-cover"
                    alt=''
                    loading='lazy'
                />
            </div>

        </React.Fragment>
    )
}

export default ImpulseContainerApp;