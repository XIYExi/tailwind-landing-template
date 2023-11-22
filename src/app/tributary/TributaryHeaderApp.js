import React from "react";
import {ReactComponent as TributaryIcon} from "./assets/TributarySvg.svg";

function TributaryHeaderApp(){
    return(
        <React.Fragment>
            <div className='h-8 z-10 relative bg-white text-gray-600 font-thin text-xs text-center tracking-widest flex items-center justify-center'>
                Our new plant book is available.
                <a href='#' className='underline ml-1'>Get it here</a>
            </div>

            <div className='h-24 z-10 relative container mx-auto px-6 flex items-center justify-center'>
                <div className='absolute inset-0 w-full h-full flex items-center justify-between text-gray-900 font-light'>
                    <div>
                        <a href="#" className="mr-6">Shop</a>
                        <a href="#" className="mr-6">About</a>
                        <a href="#" className="mr-6">Articles</a>
                    </div>
                    <div>
                        <a href="#" className="ml-6">Search</a>
                        <a href="#" className="ml-6">Cart (0)</a>
                    </div>
                </div>
                <a href='#' className='relative hidden md:block'>
                    <TributaryIcon className='h-24 w-auto text-gray-900 fill-current'/>
                </a>
            </div>

        </React.Fragment>
    )
}


export default TributaryHeaderApp;
