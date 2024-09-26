import { info } from "../data";
export default function Region(props)
{
    let filteredList=info;
    let setFilteredList=props.setData;
    function filterByRegion()
    {
        const newArray=(filteredList.filter(obj => obj.region===region));
        filteredList=newArray;
        setFilteredList(newArray);
    }
    function keyDownHandler(event)
    {
        if(event.key==="Enter")
        {
            filterByRegion();
        }
    }
    const region=props.region;
    return <div className="region" tabIndex={0} onClick={filterByRegion} onKeyDown={keyDownHandler}>
        {region}
    </div>
};