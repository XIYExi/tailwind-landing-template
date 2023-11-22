import './index.css';
import BlocksFooterApp from "./BlocksFooterApp";
import BlocksHeaderApp from "./BlocksHeaderApp";
import BlocksContainerApp from "./BlocksContainerApp";


function BlocksApp(props) {

    return(

        <div className='bg-gray-200 font-sans font-thin px-6 bg-fixed bg-cover bg-no-repeat blocks-container'>
            <BlocksHeaderApp />

            <BlocksContainerApp />

            <BlocksFooterApp />
        </div>
    )
}


export default BlocksApp;
