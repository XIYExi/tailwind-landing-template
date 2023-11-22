import TributaryHeaderApp from "./TributaryHeaderApp";
import TributaryContainerApp from "./TributaryContainerApp";
import TributaryFooterApp from "./TributaryFooterApp";

function TributaryApp(){
    return (
        <div className='font-sans antialiased bg-white'>

            <TributaryHeaderApp />

            <TributaryContainerApp />

            <TributaryFooterApp />
        </div>
    )
}

export default TributaryApp;
