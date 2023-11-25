import ShoutHeaderApp from "./ShoutHeaderApp";
import ShoutContainerApp from "./ShoutContainerApp";
import ShoutFooterApp from "./ShoutFooterApp";


export default function ShoutApp(){

    return (
        <div className='font-sans'>
            <ShoutHeaderApp />
            <ShoutContainerApp />
            <ShoutFooterApp />
        </div>
    )
}