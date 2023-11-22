import {motion} from "framer-motion";
import store from "./store";
import {useRef} from "react";
import {observer} from "mobx-react";

const sidebar = {
    open: {
        x: 0,
        y:0,
        width: 300,
        backgroundColor: '#f7f7f7',
        height: '100%',
        transition: {
            type: "spring",
            damping: 18,
            delay: 0.2,
        }
    },
    closed: {
        x:-300,
        y:0,
        width: 300,
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

function BlocksLeftSideApp(){

    const {isOpen} = store;
    console.log(isOpen)
    const containerRef = useRef(null);

    return(
        <motion.div initial={sidebar.closed}
                    ref={containerRef}
                    className='absolute top-0 left-0'
                    animate={isOpen === 'open' ? sidebar.open : sidebar.closed}
        >


        </motion.div>
    )
}


export default observer(BlocksLeftSideApp);
