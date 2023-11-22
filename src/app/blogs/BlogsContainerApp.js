import {motion} from "framer-motion";


function BlogsContainerApp(){

    return (
        <div className='w-full bg-white'>

            {/*title*/}
            <div className='text-center px-6 py-12 mb-2 bg-gray-100 border-b'>
                <h1 className='text-2xl md:text-4xl pb-4'>Blog</h1>
                <p className='leading-loose text-gray-dark'>
                    Catch up on the latest news and updates.
                </p>
            </div>


            {/*container*/}
            <div className='container max-w-4xl mx-auto md:flex items-start py-8 px-12 md:px-0'>
                {/*articles*/}
                <motion.div
                    initial={{
                        x: -100,
                        y:0,
                        opacity: 0
                    }}
                    animate={{
                        x: 0,
                        y: 0,
                        opacity: 1,
                        transition: {
                            duration: 1.2,
                            damping: 18,
                            delay: 0.2,
                        }
                    }}
                    className='w-full md:pr-12 mb-12'>
                    <article className="mb-12 article-card duration-300 transition-all">
                        <h2 className="mb-4">
                            <a href="#" className="text-black text-xl md:text-3xl no-underline hover:underline">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </a>
                        </h2>

                        <div className="mb-4 text-sm text-gray-600 font-thin">
                            by <a href="#" className="text-gray-700">Joe Bloggs</a> on 19th March 2019
                            <span className="font-bold mx-1"> | </span>
                            <a href="#" className="text-gray-700">Uncategorised</a>
                            <span className="font-bold mx-1"> | </span>
                            <a href="#" className="text-gray-700">2 Comments</a>
                        </div>

                        <p className="text-gray-700 leading-normal text-justify">
                            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>

                    </article>

                    <article className="mb-12 article-card duration-300 transition-all">
                        <h2 className="mb-4">
                            <a href="#" className="text-black text-xl md:text-3xl no-underline hover:underline">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </a>
                        </h2>

                        <div className="mb-4 text-sm text-gray-600 font-thin">
                            by <a href="#" className="text-gray-700">Joe Bloggs</a> on 19th March 2019
                            <span className="font-bold mx-1"> | </span>
                            <a href="#" className="text-gray-700">Uncategorised</a>
                            <span className="font-bold mx-1"> | </span>
                            <a href="#" className="text-gray-700">2 Comments</a>
                        </div>

                        <p className="text-gray-700 leading-normal text-justify">
                            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>

                    </article>

                    <article className="mb-12 article-card duration-300 transition-all">
                        <h2 className="mb-4">
                            <a href="#" className="text-black text-xl md:text-3xl no-underline hover:underline">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </a>
                        </h2>

                        <div className="mb-4 text-sm text-gray-600 font-thin">
                            by <a href="#" className="text-gray-700">Joe Bloggs</a> on 19th March 2019
                            <span className="font-bold mx-1"> | </span>
                            <a href="#" className="text-gray-700">Uncategorised</a>
                            <span className="font-bold mx-1"> | </span>
                            <a href="#" className="text-gray-700">2 Comments</a>
                        </div>

                        <p className="text-gray-700 leading-normal text-justify">
                            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>

                    </article>

                    <div className="flex justify-center md:justify-between text-xs">
                        <a href="#" className="bg-black text-white no-underline py-2 px-3 rounded mr-6">Previous</a>
                        <a href="#" className="bg-black text-white no-underline py-2 px-3 rounded">Next</a>
                    </div>
                </motion.div>

                {/*sidebar*/}
                <motion.div
                    initial={{
                        x: 100,
                        y: 0,
                        opacity: 0
                    }}
                    animate={{
                        x: 0,
                        y: 0,
                        opacity: 1,
                        transition: {
                            duration: 1.2
                        }
                    }}
                    className='w-full md:w-64'
                >
                    <aside className='rounded shadow overflow-hidden mb-6'>
                        <h3 className="text-sm bg-gray-100 text-gray-700 py-3 px-4 border-b">Categories</h3>

                        <div className="p-4">
                            <ul className="list-reset leading-normal">
                                <li><a href="#" className="text-gray-darkest text-sm">Uncategorised</a></li>
                                <li><a href="#" className="text-gray-darkest text-sm">Food &amp; Drink</a></li>
                                <li><a href="#" className="text-gray-darkest text-sm">Garden</a></li>
                                <li><a href="#" className="text-gray-darkest text-sm">Tools</a></li>
                            </ul>
                        </div>
                    </aside>

                    <aside className='rounded shadow overflow-hidden mb-6'>
                        <h3 className="text-sm bg-gray-100 text-gray-700 py-3 px-4 border-b">Categories</h3>

                        <div className="p-4">
                            <ul className="list-reset leading-normal">
                                <li><a href="#" className="text-gray-darkest text-sm">Uncategorised</a></li>
                                <li><a href="#" className="text-gray-darkest text-sm">Food &amp; Drink</a></li>
                                <li><a href="#" className="text-gray-darkest text-sm">Garden</a></li>
                                <li><a href="#" className="text-gray-darkest text-sm">Tools</a></li>
                            </ul>
                        </div>
                    </aside>
                </motion.div>
            </div>

        </div>
    )
}


export default BlogsContainerApp;
