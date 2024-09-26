import crescentMoon from "../design/crescent-moon.png";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Header()
{
    function onClickHandler() 
    {
        const root=document.querySelector("html");
        if(theme==="light")
        {
            root.classList.add('dark-mode');
            theme="dark";
        }
        else {
            root.classList.remove('dark-mode');
            theme="light";
        }
        setTheme(theme);
        localStorage.setItem("theme",theme);
    }
    function keyDownHandler(event) {
        if(event.key==="Enter")
        {
            onClickHandler();
        }
    }
    let initialValue="light";
    if(localStorage.getItem("theme"))
    {
        initialValue=localStorage.getItem("theme");
    }
    if(initialValue==="dark")
    {
        document.querySelector("html").classList.add("dark-mode");
    }
    let [theme,setTheme]=useState(initialValue);
    return (
    <>
        <header>
            <Link to={"/"}>
                <h3>Where in the world?</h3>
            </Link>
            <div className="theme-selector" tabIndex={0} onClick={onClickHandler} onKeyDown={keyDownHandler}>
                {/* <img src={crescentMoon} alt=""></img> */}
                <svg height="800px" width="800px" version="1.1" id="Capa_1" viewBox="0 0 47.539 47.539" xmlSpace="preserve" fill="#ffffff" stroke="#ffffff">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                    <g id="SVGRepo_iconCarrier"> 
                    <g> 
                        <g> 
                                <path d="M24.997,47.511C11.214,47.511,0,36.298,0,22.515C0,12.969,5.314,4.392,13.869,0.132 c0.385-0.191,0.848-0.117,1.151,0.186s0.381,0.766,0.192,1.15C13.651,4.64,12.86,8.05,12.86,11.601 c0,12.681,10.316,22.997,22.997,22.997c3.59,0,7.033-0.809,10.236-2.403c0.386-0.191,0.848-0.117,1.151,0.186 c0.304,0.303,0.381,0.766,0.192,1.15C43.196,42.153,34.597,47.511,24.997,47.511z M12.248,3.372C5.862,7.608,2,14.709,2,22.515 c0,12.68,10.316,22.996,22.997,22.996c7.854,0,14.981-3.898,19.207-10.343c-2.668,0.95-5.464,1.43-8.346,1.43 c-13.783,0-24.997-11.214-24.997-24.997C10.861,8.761,11.327,6.005,12.248,3.372z"/> 
                        </g> 
                    </g> 
                    </g>
                </svg>
                <p>{theme==="light"?"Dark":"Light"} Mode</p>
            </div>
        </header> 
    </>);
}