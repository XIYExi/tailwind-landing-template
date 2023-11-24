import FoundationHeroApp from "./FoundationHeroApp";
import FoundationContainerApp from "./FoundationContainerApp";
import FoundationFooterApp from "./FoundationFooterApp";


export default function FoundationApp(){

    return (
        <div className='font-sans font-normal antialiased bg-white text-gray-900'>
            <FoundationHeroApp />
            <FoundationContainerApp />
            <FoundationFooterApp />
        </div>
    )
}