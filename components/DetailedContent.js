import { useParams } from "react-router-dom"
import leftArrow from "../design/left-arrow.svg";
import { Link } from "react-router-dom";

export default function DetailedContent()
{
    const { name }=useParams();
    const [countryInfo]=info.filter(obj => obj.name.toLowerCase()===name.toLowerCase());
    const nativeName=countryInfo.nativeName;
    const population=countryInfo.population;
    const region=countryInfo.region;
    const subRegion=countryInfo.subregion;
    const capital=countryInfo.capital;
    const topLevelDomain=countryInfo.topLevelDomain;
    const currencies=countryInfo.currencies || [];
    const languages=countryInfo.languages || [];
    const borders=countryInfo.borders || [];
    const imageRUL=countryInfo.flag;
    return (
        <>
            <div className="detailed-content">
                <Link to={"/"}>
                    <div className="back-button" tabIndex={0}>
                        {/* <img src={leftArrow} alt=""></img> */}
                        <svg fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">

                            <g data-name="Layer 2">

                            <g data-name="arrow-back">

                            <rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/>

                            <path d="M19 11H7.14l3.63-4.36a1 1 0 1 0-1.54-1.28l-5 6a1.19 1.19 0 0 0-.09.15c0 .05 0 .08-.07.13A1 1 0 0 0 4 12a1 1 0 0 0 .07.36c0 .05 0 .08.07.13a1.19 1.19 0 0 0 .09.15l5 6A1 1 0 0 0 10 19a1 1 0 0 0 .64-.23 1 1 0 0 0 .13-1.41L7.14 13H19a1 1 0 0 0 0-2z"/>

                            </g>

                            </g>

                        </svg>
                        <p>Back</p>
                    </div>
                </Link>
                
                <section className="detailed-information">
                    <div className="img-wrapper">
                        <img src={imageRUL} alt={name}></img> 
                    </div>
                    <article className="info-wrapper">
                        <h1>{countryInfo.name}</h1>
                        <div className="info">
                            <div className="left-section">
                                <p><span>Native Name: </span>{nativeName}</p>
                                <p><span>Poulation: </span>{population.toLocaleString()}</p>
                                <p><span>Region: </span>{region}</p>
                                <p><span>Sub Region: </span>{subRegion}</p>
                                <p><span>Capital: </span>{capital}</p>
                            </div>
                            <div className="right-section">
                                <p><span>Top Level Domain: </span>{topLevelDomain}</p>
                                <p><span>Currencies: </span>{currencies.map(obj => obj.name).join(",")}</p>
                                <p><span>Languages: </span>{languages.map(obj => obj.name).join(",")}</p>
                            </div>
                        </div>
                        {borders.length>0 ? (<div className="borders-wrapper">
                            <span>Border Countries: </span>
                            <div className="border-countries">
                                {
                                    borders.map(border => <button className="border" type="">
                                            <p>
                                                {info.filter(country => country.alpha3Code===border)[0].name}
                                            </p>
                                        </button>
                                    )
                                }
                            </div>
                        </div>) : <></>}
                        
                    </article>
                </section>
            </div>
        </>
    )
}