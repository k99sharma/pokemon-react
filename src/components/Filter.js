import './Filter.css';
import config_values from '../utilities/config';
import { useState, useEffect } from 'react';


function Filter(props){
    const [filterValue, setFilterValue] = useState("none");

    useEffect(()=>{
        props.onFilter(filterValue);
    }, [filterValue])

    function handleSelect(event){
        setFilterValue(event.target.value);
    }

    return (
        <div className = 'filter rounded-md p-1'>
            <select className = 'filter__select p-1' onChange={ handleSelect }>
                <option value = "none">Regions</option>
                {
                    config_values.REGIONS.map(region => {
                        return <option
                            key = { region.id }
                            value={ region.name }
                        >
                            {region.name}
                        </option>
                    })
                }
            </select>
        </div> 
    )
}


export default Filter;