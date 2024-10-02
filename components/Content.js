import Country from "./Country";
import Region from "./Region";
import searchButtonImg from "../design/search-button.png";
import downArrow from "../design/down-arrow.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { info } from "../data";


export default function Content()
{
    function submitHandler(event)
    {
        if(event.key==="Enter")
        {
            filteredList=info.filter(obj => obj.name.toLowerCase().startsWith(event.target.value.toLowerCase()));
            setFilteredList(filteredList);
        }
    }
    function onClickHandler()
    {
        const svg=document.querySelector('.filter-button svg');
        if(!clickStatus)
        {
            clickStatus=true;
            setClickStatus(clickStatus);
            svg.classList.add('rotate-element');
        }
        else
        {
            clickStatus=false;
            setClickStatus(clickStatus);
            svg.classList.remove('rotate-element');
        }
    }
    function keyBoardClickHandler(event) {
        if(event.key==="Enter")
        {
            onClickHandler();
        }
    }
    let [clickStatus,setClickStatus]=useState(false);
    let [filteredList,setFilteredList]=useState(info);
    return (
    <>
        <div className="content">
            <section className="filters">
                <div className="input-wrapper" tabIndex={0}>
                    <div className="search-button">
                        {/* <img src={searchButtonImg} alt=""></img> */}
                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px"><path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"/></svg>
                    </div>
                    <input type="text" name="" placeholder="Search for a country..." onKeyDown={submitHandler}></input>
                </div>
                
                <div className="filter-button" tabIndex={0} onClick={onClickHandler} onKeyDown={keyBoardClickHandler}>
                    <p>Filter by Region</p>
                    {/* <img src={downArrow} alt=""></img> */}
                    <svg fill="#000000" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xmlSpace="preserve">
	                    <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"/>
                    </svg>
                    {clickStatus ? <div className="region-wrapper">
                        <Region region="Africa" setData={setFilteredList} />
                        <Region region="Americas" setData={setFilteredList} />
                        <Region region="Asia" setData={setFilteredList} />
                        <Region region="Europe" setData={setFilteredList} />
                        <Region region="Oceania" setData={setFilteredList} />
                    </div>:<></>}
                    
                    
                </div>
            </section>

            <section className="content-wrapper">
                {
                    filteredList.map(obj => (
                        <Link key={obj.name} to={"/country/"+obj.name}>
                            <Country  country={obj} ></Country>
                        </Link>
                    ))
                }
            </section>
        </div>
    </>);
}