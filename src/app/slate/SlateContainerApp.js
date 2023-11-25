import React from "react";

export default function SlateContainerApp(){
    return(
        <React.Fragment>
            <div className="bg-gray-100 py-24 px-12 text-center">
                <h2 className='text-lg md:text-2xl mb-8'>
                    We promise locally sourced, responsibly cultivated and harvested products,
                    <br className="hidden lg:block" />
                    bringing only the best to the table.
                </h2>
                <a href='#' className='text-xs uppercase text-gray-500 hover:text-gray-900'>Shop all products</a>
            </div>

            <div className="bg-white py-12 lg:py-24 px-6 lg:px-24">
                <div className="flex flex-wrap -mx-2">

                    <div className="w-full md:w-1/3 p-2 mb-12">
                        <a href="#" className="block mb-8 bg-black hover:bg-gray-700">
                            <img src="https://images.unsplash.com/photo-1457296898342-cdd24585d095?w=800"
                                 className="w-full h-64 object-cover opacity-75"
                                 alt=''
                                 loading='lazy'
                            />
                        </a>
                        <a href="#" className="block text-base text-left uppercase tracking-wider text-gray-700">
                            Homegrown Fruits
                        </a>
                    </div>

                    <div className="w-full md:w-1/3 p-2 mb-12">
                        <a href="#" className="block mb-8 bg-black hover:bg-gray-700">
                            <img src="https://images.unsplash.com/photo-1491720731493-223f97d92c21?w-800"
                                 className="w-full h-64 object-cover opacity-75"
                                 alt=''
                                 loading='lazy'
                            />
                        </a>
                        <a href="#"
                           className="block text-base text-left uppercase tracking-wider text-gray-700">
                            Fruit &amp; Herbal Tea
                        </a>
                    </div>

                    <div className="w-full md:w-1/3 p-2 mb-12">
                        <a href="#" className="block mb-8 bg-black hover:bg-gray-700">
                            <img src="https://images.unsplash.com/photo-1542210435-59f90e156f10?w=1000"
                                 className="w-full h-64 object-cover opacity-75"
                                 alt=''
                                 loading='lazy'
                            />
                        </a>
                        <a href="#" className="block text-base text-left uppercase tracking-wider text-gray-700">
                            Homemade Cake
                        </a>
                    </div>

                </div>

                <div className="py-12">

                    <h2 className="text-center uppercase text-2xl lg:text-4xl tracking-wider mb-12">About Us</h2>

                    <p className="text-gray-700 mx-auto max-w-2xl text-center leading-relaxed mb-12">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                        Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                        Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo.
                    </p>

                </div>

                <div className="w-full h-64">
                    <img src="https://images.unsplash.com/photo-1477064996809-dae46985eee7?w=800"
                         className="w-full h-full object-cover"
                         alt=''
                         loading='lazy'
                    />
                </div>

                <div className="flex flex-wrap pt-12">
                    <div className="w-full lg:w-1/2">
                        <h3 className="uppercase text-lg lg:text-xl tracking-wider mb-6">Contact Us</h3>
                    </div>
                    <div className="w-full lg:w-1/2 mb-12">
                        <p className="text-sm text-gray-700 tracking-wider leading-loose mb-6">
                            123 Street Name, City A12 B89<br/>
                            Phone 0800 123 456
                        </p>
                        <a href="#" className="text-xs uppercase text-gray-500 hover:text-gray-900">Send us an email</a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}