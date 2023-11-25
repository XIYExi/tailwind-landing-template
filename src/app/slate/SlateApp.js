import SlateHeroApp from "./SlateHeroApp";
import SlateContainerApp from "./SlateContainerApp";
import SlateFooterApp from "./SlateFooterApp";


export default function SlateApp(){

    return(
        <div className='font-sans font-thin p-12 bg-gray-200'>
            <SlateHeroApp />
            <SlateContainerApp />
            <SlateFooterApp />
        </div>
    )
}