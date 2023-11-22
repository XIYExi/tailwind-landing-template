import VoyageHeaderApp from "./VoyageHeaderApp";
import VoyageContainerApp from "./VoyageContainerApp";
import VoyageFooterApp from "./VoyageFooterApp";


function VoyageApp(){

    return (
        <div className='font-sans antialiased bg-gary-50'>
            <VoyageHeaderApp />

            <VoyageContainerApp />

            <VoyageFooterApp />
        </div>
    )
}


export default VoyageApp;
