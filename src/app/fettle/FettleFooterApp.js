import React from "react";

function FettleFooterApp(){
    return (
        <React.Fragment>
            <div className='container mx-auto px-6 mb-12'>
                <div className="flex h-32 lg:h-48 md:h-52 bg-black relative">
                    <div className="flex-1 h-full relative">
                        <img
                            src="https://images.unsplash.com/photo-1591258370814-01609b341790?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                            className="absolute inset w-full h-full object-cover opacity-50"
                            alt=''
                        />
                    </div>
                    <div className="flex-1 h-full relative">
                        <img
                            src="https://images.unsplash.com/photo-1598136490929-292a0a7890c2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1949&q=80"
                            className="absolute inset w-full h-full object-cover opacity-50"
                            alt=''
                        />
                    </div>
                    <div className="flex-1 h-full relative">
                        <img
                            src="https://images.unsplash.com/photo-1554284126-aa88f22d8b74?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2314&q=80"
                            className="absolute inset w-full h-full object-cover opacity-50"
                            alt=''
                        />
                    </div>
                    <div className="flex-1 h-full relative hidden lg:block">
                        <img
                            src="https://images.unsplash.com/photo-1546483875-ad9014c88eba?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1874&q=80"
                            className="absolute inset w-full h-full object-cover opacity-50"
                            alt=''
                        />
                    </div>
                    <div className="flex-1 h-full relative hidden lg:block">
                        <img
                            src="https://images.unsplash.com/photo-1557564437-0995702f88fc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                            className="absolute inset w-full h-full object-cover opacity-50"
                            alt=''
                        />
                    </div>
                    <div className="absolute inset-0 w-full h-full flex z-20 flex items-center justify-center">
                        <a href="#" className="bg-white px-8 py-3 text-sm tracking-widest font-heading">
                            @xiye
                        </a>
                    </div>
                </div>
            </div>

            <div className='text-sm lg:text-base text-center font-heading pb-24 tracking-widest uppercase opacity-50'>
                &copy; fettle. all rights reserved
            </div>
        </React.Fragment>
    )
}

export default FettleFooterApp;