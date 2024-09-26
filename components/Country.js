import { info } from "../data";
export default function Country(props)
{
    const country=props.country;
    const imgURL=country.flags.png;
    const name=country.name;
    const population=country.population;
    const region=country.region;
    const capital=country.capital;
    return (
        <>
            <div className="country">
                <img src={imgURL} alt=""></img>
                <div className="country-info">
                    <h3>{name}</h3>
                    <p><span>Poulation: </span>{population.toLocaleString()}</p>
                    <p><span>Region: </span>{region}</p>
                    <p><span>Capital: </span>{capital}</p>
                </div>
            </div>
        </>
    )
}