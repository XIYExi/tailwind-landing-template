import React, {useEffect, useRef, useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {RouterProvider} from 'react-router-dom';
import router from "./router";
import LeftSideNavButton from "./component/LeftSideNavButton";
import LeftSideNav from "./component/LeftSideNav";
import {observer} from "mobx-react";



function WrapperApp(){
    const path = window.location.pathname;
    const pageRef = useRef(null);
    const navRef = useRef(null);

    return(
        <div ref={pageRef}>
            { path !== '/' && <LeftSideNavButton/>}
            {/*pages*/}
            <RouterProvider router={router} />

            <LeftSideNav ref={navRef}/>
        </div>
    )
}

const App = observer(WrapperApp);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
