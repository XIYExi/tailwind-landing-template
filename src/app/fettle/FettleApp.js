import FettleHeaderApp from "./FettleHeaderApp";
import FettleContainerApp from "./FettleContainerApp";
import FettleFooterApp from "./FettleFooterApp";

function FettleApp(){
    return (
        <div>
            <FettleHeaderApp />

            <FettleContainerApp />

            <FettleFooterApp />
        </div>
    )
}

export default FettleApp;