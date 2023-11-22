import FettleHeaderApp from "./FettleHeaderApp";
import FettleContainerApp from "./FettleContainerApp";
import FettleFooterApp from "./FettleFooterApp";

function FettleApp(){
    return (
        <div className='font-sans antialiased bg-gray-50'>
            <FettleHeaderApp />

            <FettleContainerApp />

            <FettleFooterApp />
        </div>
    )
}

export default FettleApp;