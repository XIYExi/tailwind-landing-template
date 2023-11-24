import React from "react";
import FullscreenHeroApp from "./FullscreenHeroApp";
import FullscreenContainerApp from "./FullscreenContainerApp";
import FullscreenFooterApp from "./FullscreenFooterApp";

function FullscreenApp() {

    return (
        <div className='font-sans font-thin'>
            <FullscreenHeroApp />
            <FullscreenContainerApp />
            <FullscreenFooterApp />
        </div>
    )
}

export default FullscreenApp;