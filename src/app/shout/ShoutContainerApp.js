import React from "react";

export default function ShoutContainerApp(){
    return(
        <React.Fragment>
            <div className='max-w-5xl mx-auto p-8 py-24 flex justify-start items-center'>
                <div className="flex-1">
                    <h1 className="font-display-italic font-extrabold text-5xl md:text-6xl italic leading-none mb-12">Introducing.</h1>
                    <p className="leading-loose max-w-xl">
                        Nisl suscipit adipiscing bibendum est ultricies integer.
                        Faucibus a pellentesque sit amet. Gravida quis blandit turpis cursus in hac habitasse platea.
                    </p>
                </div>
                <div className="hidden md:block w-56">
                    <a href="#" className="ml-12 bg-yellow-400 py-6 px-10">Learn more</a>
                </div>
            </div>

            <img src="https://images.unsplash.com/photo-1481456384069-0effc539ab7e?w=2000" className="w-full h-64 object-cover" alt='' loading='lazy'/>

            <div className='bg-gray-100'>
                <div className="max-w-5xl mx-auto p-8 py-24 flex flex-wrap justify-start items-center">
                    <div className="flex-1">
                        <h2 className="font-display-italic font-extrabold text-5xl md:text-6xl italic leading-none mb-12">Enlighten.</h2>
                    </div>
                    <div className="w-full lg:w-72">
                        <p className="leading-loose max-w-xl">
                            Viverra mauris in aliquam sem fringilla ut morbi tincidunt.
                            Posuere ac ut consequat semper viverra nam libero justo. Nascetur ridiculus mus
                            mauris vitae ultricies leo integer malesuada nunc.
                        </p>
                    </div>
                </div>
            </div>

            <div className='max-w-5xl mx-auto pt-20 p-8 flex justify-end'>
                <h3 className="font-display-italic font-extrabold text-5xl md:text-6xl italic leading-none mb-12 max-w-xl">
                    Products.
                </h3>
            </div>

            <div className='container mx-auto flex flex-wrap pb-20'>
                <div className="w-full md:w-1/2 lg:w-1/3 px-6 mb-12">
                    <a href="#">
                        <img src="https://images.unsplash.com/photo-1524010349062-860def6649c3?w=800" className="w-full h-64 object-cover mb-6" alt='' loading='lazy'/>
                    </a>
                    <h3 className="text-2xl uppercase font-display font-extrabold tracking-widest mb-2">
                        Oculous Trainer</h3>
                    <p className="text-xs text-gray-500 mb-4">
                        Eros in cursus turpis massa tincidunt dui ut ornare.
                        Vestibulum morbi blandit cursus risus at ultrices mi. Augue ut lectus arcu bibendum at varius.
                    </p>
                    <a href="#" className="inline-block duration-300 transition-all border-2 border-black py-3 px-8 uppercase font-display font-thin tracking-wide text-xs hover:bg-yellow-400 hover:border-yellow-400">
                        Learn more
                    </a>
                </div>

                <div className="w-full md:w-1/2 lg:w-1/3 px-6 mb-12">
                    <a href="#">
                        <img src="https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?w=800"
                             className="w-full h-64 object-cover mb-6"
                             alt=''
                             loading='lazy'
                        />
                    </a>
                    <h3 className="text-2xl uppercase font-display font-extrabold tracking-widest mb-2">
                        Vinta Backpack
                    </h3>
                    <p className="text-xs text-gray-500 mb-4">
                        Eros in cursus turpis massa tincidunt dui ut ornare.
                        Vestibulum morbi blandit cursus risus at ultrices mi. Augue ut lectus arcu bibendum at varius.
                    </p>
                    <a href="#" className="inline-block duration-300 transition-all border-2 border-black py-3 px-8 uppercase font-display font-thin tracking-wide text-xs hover:bg-yellow-400 hover:border-yellow-400">
                        Learn more
                    </a>
                </div>

                <div className="w-full md:w-1/2 lg:w-1/3 px-6 mb-12">
                    <a href="#">
                        <img src="https://images.unsplash.com/photo-1469210537992-30c8c8abef12?w=800"
                             className="w-full h-64 object-cover mb-6"
                             alt=''
                             loading='lazy'
                        />
                    </a>
                    <h3 className="text-2xl uppercase font-display font-extrabold tracking-widest mb-2">
                        Leica Camera
                    </h3>
                    <p className="text-xs text-gray-500 mb-4">
                        Eros in cursus turpis massa tincidunt dui ut ornare.
                        Vestibulum morbi blandit cursus risus at ultrices mi. Augue ut lectus arcu bibendum at varius.
                    </p>
                    <a href="#" className="inline-block duration-300 transition-all border-2 border-black py-3 px-8 uppercase font-display font-thin tracking-wide text-xs hover:bg-yellow-400 hover:border-yellow-400">
                        Learn more
                    </a>
                </div>
            </div>
        </React.Fragment>
    )
}