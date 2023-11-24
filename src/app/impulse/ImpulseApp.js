import ImpulseHeroApp from "./ImpulseHeroApp";
import ImpulseContainerApp from "./ImpulseContainerApp";
import ImpulseFooterApp from "./ImpulseFooterApp";

export default function ImpulseApp(){
    return(
        <div className='font-sans antialiased bg-white'>
            <ImpulseHeroApp />
            <ImpulseContainerApp />
            <ImpulseFooterApp />
        </div>
    )
}