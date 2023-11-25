import {list, listName} from "./component/constants";
import React from "react";
import './App.css';

function App() {
  return (
    <div className="bg-white">
        <div className="w-full flex flex-col justify-center items-center bg-gray-100 py-12 mb-8 border-b">
            <h1 className="px-4 mb-10 py-4 text-center font-thin text-xl border-t-2 border-b-2 border-gray-200">
                Custom Layouts &amp; Templates
            </h1>
            <a href="https://github.com/XIYExi/tailwind-landing-template"
               className="bg-blue-200 text-blue-700 py-3 px-4 rounded-sm no-underline text-xs inline-block hover:bg-blue-300 hover:shadow-lg">
                View on Github
            </a>
        </div>

        <div className='container mx-auto flex justify-start items-start flex-wrap'>

            {
                list.map((item, index) => (
                    <div className="w-full md:w-1/2 lg:w-1/3 p-4" key={index}>
                        <div className="block rounded-sm w-full h-64 relative overflow-hidden shadow bg-white">

                            {/*<React.Suspense fallback={<div>...</div>}>
                                <iframe src={`/${item}`} className="absolute layout-frame" width='100%' height='100%' scrolling='no'/>
                            </React.Suspense>*/}

                            <a href={`/${listName[index]}`}
                               className="block absolute pin w-full h-full duration-300 transition-all hover:opacity-60 hover:bg-blue-100 imgHover">
                                <img src={item} alt='' className='absolute layout-frame duration-300 transition-all' loading='lazy'/>
                            </a>
                        </div>
                        <h2 className="p-4 text-center text-lg font-thin">{`${listName[index].charAt(0).toUpperCase() + listName[index].slice(1)}`}</h2>
                    </div>
                ))
            }

        </div>


    </div>
  );
}

export default App;
