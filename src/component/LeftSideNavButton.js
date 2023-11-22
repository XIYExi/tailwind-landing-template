import {motion} from "framer-motion";
import {action} from "mobx";
import store from "../store";
import {observer} from "mobx-react";


function LeftSideNavButton(){


    return (
        <motion.button
            className='fixed top-5 left-5 lg:top-10 lg:left-10 font-thin text-sm text-gray-300 hover:underline hover:text-black duration-300 transition'
            style={{zIndex: 9999}}
            onClick={action(() => {
                store.toggleIsOpen()
            })}
            initial={false}
            animate={
                store.isOpen === 'open' ? {
                    // 打开
                    x: -10,
                    y: -20,
                    scale: 1.25,
                    color: "black",
                    duration: 0.1,
                    transition: {
                        delay: 0.1,
                    }
                } : {
                    //
                    x: 10,
                    y: 10,
                    scale: 1,
                    color: "rgb(209 213 219)", // text-gray-300
                }
            }
        >
            Template
        </motion.button>
    )
}


export default observer(LeftSideNavButton);
