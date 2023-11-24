import {motion} from "framer-motion";
import store from "../store/index"
import React, {forwardRef, Fragment} from "react";
import {observer} from "mobx-react";
import {list, listName} from "./constants";




const sidebar = {
    open: {
        x: 0,
        y:0,
        width: 450,
        backgroundColor: '#f7f7f7',
        height: '100%',
        transition: {
            type: "spring",
            damping: 18,
            delay: 0.2,
        }
    },
    closed: {
        x:-450,
        y:0,
        width: 450,
        backgroundColor: '#f7f7f7',
        height: '100%',
        transition: {
            delay: 0.2,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};

const LeftSideNav = forwardRef((props, ref) => {

    const {isOpen} = store;
    // console.log(isOpen)

    return(
        <motion.div initial={sidebar.closed}
                    className='fixed top-0 left-0 overflow-auto pb-24'
                    animate={isOpen === 'open' ? sidebar.open : sidebar.closed}
                    style={{zIndex: 9998}}
                    ref={ref}
        >

            <button className='w-full p-4 mt-12 ml-2 font-thin text-md text-gray-600 hover:underline hover:text-black duration-300 transition-all text-left'>
                <a href='/'>Home</a>
            </button>

            {
                list.map((item, index) => (
                    <div className="w-full p-4" key={index}>
                        <div className="block rounded-sm w-full h-64 relative overflow-hidden shadow bg-white">

                            {/*<React.Suspense fallback={<div>...</div>}>
                                <iframe src={`/${item}`} className="absolute layout-frame" width='100%' height='100%' scrolling='no'/>
                            </React.Suspense>*/}
                            <img src={item} alt='' className='absolute layout-frame' loading='lazy'/>

                            <a href={`/${listName[index]}`}
                               className="block absolute pin w-full h-full opacity-25 hover:bg-blue-100">
                            </a>
                        </div>
                        <h2 className="p-4 text-center text-lg font-thin">{`${listName[index].charAt(0).toUpperCase() + listName[index].slice(1)}`}</h2>
                    </div>
                ))
            }

        </motion.div>
    )
})


export default observer(LeftSideNav);
