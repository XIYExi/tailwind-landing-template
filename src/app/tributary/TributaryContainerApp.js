import React from "react";

function TributaryContainerApp(){

    return (
        <React.Fragment>
            <div className='-mt-32 relative w-full h-screen bg-yellow-300 flex items-end justify-center'>
                {/*背景图*/}
                <img
                    src="https://images.unsplash.com/photo-1521334884684-d80222895322?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=100"
                    className="w-full h-full absolute inset-0 object-cover object-top opacity-80"
                    alt=''
                />

                {/*向下箭头*/}
                <svg className="w-10 h-10 text-gray-900 relative z-10 mb-8" fill="none" stroke="currentColor"
                     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>

            <div className='bg-green-50 bg-opacity-50'>
                <div className='px-12 py-32'>
                    <h1 className='text-5xl max-w-2xl mx-auto leading-tight text-center font-display font-semibold text-gray-800'>
                        Beautiful plant stands that encourage you to get creative.
                    </h1>
                </div>

                {/*交错图片*/}
                <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-12'>
                    <img
                        src="https://images.unsplash.com/photo-1459156212016-c812468e2115?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=949&q=80"
                        className="h-screen w-full object-cover"
                        alt=''
                    />
                    <img
                        src="https://images.unsplash.com/photo-1531875456634-3f5418280d20?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                        className="h-screen w-full object-cover md:mt-32"
                        alt=''
                    />
                </div>

                <div className='container mx-auto px-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:-mt-32'>
                    <div className='p-12 md:p-16'>
                        <p className='text-gray-700 leading-relaxed mb-12'>
                            Driven by a committment to encourage creativity with greenery, we design functional plant stands and botanical wares that amplify plant wares within a space.
                        </p>
                        <a href='#' className='border-b border-gray-700 text-gray-700'>Shop all our products</a>
                    </div>
                </div>

                {/*三张图片*/}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-12 px-12 pt-32 pb-32'>
                    <a href="#"
                       className="block relative h-72 flex items-end justify-end pr-12 pb-12 text-right hover:opacity-75">
                        <div className="relative z-10">
                            <h3 className="font-display text-3xl font-semibold text-gray-800 mb-6">Our Favourites</h3>
                            <span className="border-b border-gray-700 text-gray-700 pb-1">Shop now</span>
                        </div>
                        <img
                            src="https://images.unsplash.com/photo-1487700160041-babef9c3cb55?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1935&q=80"
                            className="absolute inset-0 w-full h-full object-cover object-right"
                            alt=''
                        />
                    </a>
                    <a href="#"
                       className="block relative h-72 flex items-end justify-end pr-12 pb-12 text-right hover:opacity-75">
                        <div className="relative z-10">
                            <h3 className="font-display text-3xl font-semibold text-gray-800 mb-6">The Collection</h3>
                            <span className="border-b border-gray-700 text-gray-700 pb-1">Shop now</span>
                        </div>
                        <img
                            src="https://images.unsplash.com/photo-1466781783364-36c955e42a7f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1951&q=80"
                            className="absolute inset-0 w-full h-full object-cover object-right"
                            alt=''
                        />
                    </a>
                    <a href="#"
                       className="block relative h-72 flex items-end justify-end pr-12 pb-12 text-right hover:opacity-75">
                        <div className="relative z-10">
                            <h3 className="font-display text-3xl font-semibold text-gray-800 mb-6">Signature Style</h3>
                            <span className="border-b border-gray-700 text-gray-700 pb-1">Shop now</span>
                        </div>
                        <img
                            src="https://images.unsplash.com/photo-1504198266287-1659872e6590?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80"
                            className="absolute inset-0 w-full h-full object-cover object-right"
                            alt=''
                        />
                    </a>
                </div>

                <div className='px-12 container mx-auto pb-24'>
                    <h2 className="text-5xl leading-tight text-left font-display font-semibold text-gray-800 px-12">
                        New products
                    </h2>
                </div>

                <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-12 pb-24'>
                    <a href="#" className="block hover:opacity-75">
                        <img
                            src="https://images.unsplash.com/photo-1459156212016-c812468e2115?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=949&q=80"
                            className="h-screen w-full object-cover"
                            alt=''
                        />
                        <div className="pt-6">
                            <h3>Loop</h3>
                            <div className="text-red-400">
                                £30.00
                                <span className="text-gray-400 line-through ml-4">£60.00</span>
                            </div>
                        </div>
                    </a>
                    <a href="#" className="block hover:opacity-75 md:-mt-32">
                        <img
                            src="https://images.unsplash.com/photo-1531875456634-3f5418280d20?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                            className="h-screen w-full object-cover"
                            alt=''
                        />
                        <div className="pt-6">
                            <h3>Loop</h3>
                            <div className="text-red-400">
                                £30.00
                                <span className="text-gray-400 line-through ml-4">£60.00</span>
                            </div>
                        </div>
                    </a>
                </div>


                <div className='bg-white py-12'>
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-32 px-12 pt-24">
                        <div>
                            <h2 className="pb-24 px-12 text-4xl leading-tight text-left font-display font-semibold text-gray-800 px-12">
                                How to turn your home into a jungle retreat
                            </h2>
                            <img
                                src="https://images.unsplash.com/photo-1484509025075-64c8133991bf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80"
                                className="h-96 w-full object-cover"
                                alt=''
                            />
                        </div>
                        <div className="md:pt-32">
                            <img
                                src="https://images.unsplash.com/photo-1505066211281-ed125c006f4c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                                className="h-96 w-full object-cover"
                                alt=''
                            />
                                <div className="px-12 py-24">
                                    <p className="text-gray-700 leading-relaxed mb-12">
                                        With design-savvy tips and expert advice you'll learn all there is to know about decorating with
                                        plants and botanical styling, plus the necessities like light requirements and when to
                                        water and feed. From bathroom to boudoir and every room in between, create your very own green oasis with Plant Style.
                                    </p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="bg-white py-12">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-32 px-12 pt-24">
                    <div>
                        <h2 className="pb-24 px-12 text-5xl leading-tight text-left font-display font-semibold text-gray-800 px-12">
                            How to turn your home into a jungle retreat
                        </h2>
                        <img
                            src="https://images.unsplash.com/photo-1484509025075-64c8133991bf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80"
                            className="h-96 w-full object-cover"
                            alt=''
                        />
                    </div>
                    <div className="md:pt-32">
                        <img
                            src="https://images.unsplash.com/photo-1505066211281-ed125c006f4c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                            className="h-96 w-full object-cover"
                            alt=''
                        />
                        <div className="px-12 py-24">
                            <p className="text-gray-700 leading-relaxed mb-12">
                                With design-savvy tips and expert advice you'll learn all there is to know about decorating with plants and botanical
                                styling, plus the necessities like light requirements and when to water and feed.
                                From bathroom to boudoir and every room in between, create your very own green oasis
                                with Plant Style.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default TributaryContainerApp;
